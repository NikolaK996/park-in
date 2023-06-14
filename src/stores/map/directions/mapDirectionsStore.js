import {ref} from 'vue'

import L from 'leaflet'
import 'leaflet-routing-machine'
import {defineStore} from 'pinia'

import {useGeolocationStore} from '@/stores/geolocation/geolocationStore'
import {getEncodedPolylinesFromRoute} from '@/stores/map/directions/helpers/getEncodedPolylinesFromRoute'
import {useMapLocationsStore} from '@/stores/map/locations/mapLocationsStore'
import {useMapStore} from '@/stores/map/mapStore'

export const useMapDirectionsStore = defineStore('mapDirections', () => {
	const routeDOM = ref(null)
	const handleRouteSelectedEnabled = ref(false)
	
	function createRouteDOM() {
		const mapStore = useMapStore()
		const geolocationStore = useGeolocationStore()
		
		routeDOM.value = L.Routing.control({
			waypoints: [L.latLng(geolocationStore.latitude, geolocationStore.longitude)],
			routeWhileDragging: false,
			fitSelectedRoutes: true,
			useZoomParameter: true,
			addWaypoints: false,
			createMarker: () => null,
			lineOptions: {
				styles: [{color: '#00b0ff', stroke: 'red', opacity: 1, weight: 8}]
			}
		}).addTo(mapStore.mapDOM.leafletObject)
		
		routeDOM.value.on('routeselected', (event) => {
			if (handleRouteSelectedEnabled.value) {
				handleRouteSelected(event)
			}
		})
	}
	
	// since we get this route from `leaflet-routing-machine` package, that works by fetching some api in the background,
	// we use this handler method to trigger when the `routeselected` event gets emitted.
	function handleRouteSelected(routeSelectedEvent) {
		const mapLocationsStore = useMapLocationsStore()
		const polylines = getEncodedPolylinesFromRoute(routeSelectedEvent.route)
		
		mapLocationsStore.fetchLocationsByRoute(polylines)
	}
	
	/**
	 * Use this method to set directions and draw route on the map.
	 * If you want to trigger `handleRouteSelected()` method, make sure that `callbackEnabled` boolean is set to true.
	 * In case you don't want it to trigger, set it to false.
	 * This is useful when you want to show route to already fetched location marker.
	 *
	 * @param latitude - number
	 * @param longitude - number
	 * @param callbackEnabled - boolean
	 */
	function setDirection(latitude, longitude, callbackEnabled = true) {
		handleRouteSelectedEnabled.value = callbackEnabled
		const geolocationStore = useGeolocationStore()
		const waypoints = [
			L.latLng([geolocationStore.latitude, geolocationStore.longitude]),
			L.latLng([latitude, longitude])
		]
		
		if (waypoints) {
			routeDOM.value.setWaypoints(waypoints)
		}
	}
	
	function resetDirection() {
		routeDOM.value.setWaypoints({})
	}
	
	return {
		routeDOM,
		createRouteDOM,
		setDirection,
		resetDirection
	}
})
