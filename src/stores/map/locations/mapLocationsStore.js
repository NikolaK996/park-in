import { ref } from 'vue'

import axios from 'axios'
import { defineStore } from 'pinia'

import { useGeolocationStore } from '@/stores/geolocation/geolocationStore'
import { getFilteredLocations } from '@/stores/map/locations/helpers/getFilteredLocations'

export const useMapLocationsStore = defineStore('mapLocations', () => {
  const locations = ref([])
  const loading = ref(false)
  const apiAbortController = new AbortController()

  async function fetchLocations(location) {
    const geolocationStore = useGeolocationStore()

    try {
      loading.value = true

      const latitude = location?.[0] ?? geolocationStore.latitude
      const longitude = location?.[1] ?? geolocationStore.longitude

      if (longitude && latitude) {
        const { data } = await axios.get('https://api.openchargemap.io/v3/poi', {
          signal: apiAbortController.signal,
          params: {
            latitude,
            longitude,

            output: 'json',
            maxresults: 20,
            key: import.meta.env.VITE_OPEN_LOCATIONS_API_KEY
          }
        })

        locations.value = getFilteredLocations(data)
      }
    } catch (error) {
      console.warn(error)
    } finally {
      loading.value = false
    }
  }

  /**
   * @param polylines - Array<polyline>
   */
  async function fetchLocationsByRoute(polylines) {
    try {
      loading.value = true
      locations.value = []
      apiAbortController.abort()

      for (let i = 0; i < polylines.length; i++) {
        const polyline = polylines[i]
        const response = await axios.get('https://api.openchargemap.io/v3/poi', {
          params: {
            polyline,
            output: 'json',
            maxresults: 5,
            key: import.meta.env.VITE_OPEN_LOCATIONS_API_KEY
          }
        })

        locations.value = locations.value.concat(getFilteredLocations(response.data))
      }
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  return {
    locations,
    loading,
    fetchLocations,
    fetchLocationsByRoute
  }
})
