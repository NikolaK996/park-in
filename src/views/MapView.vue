<template>
  <div class="">
    <main class="">
      <div
        v-if="headerHeight"
        :style="{ height: `calc(100vh - ${headerHeight}px` }"
        class="relative w-full flex flex-col"
      >
        <map-search />
        <div
          v-if="mapStore.showResults"
          class="absolute map-sidebar-wrapper w-full sm:h-[calc()] sm:w-1/4 bottom-0 sm:bottom-auto sm:top-24 sm:left-20 z-2 sm:min-w-[20rem] min-w-[12rem]"
        >
          <MapSidebar />
        </div>
        <l-map ref="mapDOM" :center="center" :zoom="zoom" @ready="initMap">
          <map-sidebar-toggler />
          <map-find-geolocation />
          <map-loading />

          <l-tile-layer
            layer-type="base"
            name="OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <map-location-marker
            v-for="(location, index) in mapLocationsStore.locations"
            :key="index"
            :location="location"
          />
          <l-marker :lat-lng="[geolocationStore.latitude, geolocationStore.longitude]">
            <l-icon :icon-size="[35, 35]" icon-url="/src/assets/icons/location.png" />
          </l-marker>
        </l-map>
      </div>
    </main>
  </div>
</template>

<script setup>
import { nextTick, onBeforeMount, ref, watch } from 'vue'

import 'leaflet/dist/leaflet.css'
import { LIcon, LMap, LMarker, LTileLayer } from '@vue-leaflet/vue-leaflet'

import MapFindGeolocation from '@/components/sections/map/MapFindGeolocation.vue'
import MapLoading from '@/components/sections/map/MapLoading.vue'
import MapLocationMarker from '@/components/sections/map/MapLocationMarker.vue'
import MapSearch from '@/components/sections/map/MapSearch.vue'
import MapSidebar from '@/components/sections/map/MapSidebar.vue'
import MapSidebarToggler from '@/components/sections/map/MapSidebarToggler.vue'
import { useGeolocationStore } from '@/stores/geolocation/geolocationStore'
import { useGlobalStore } from '@/stores/global/globalStore'
import { useMapDirectionsStore } from '@/stores/map/directions/mapDirectionsStore'
import { useMapLocationsStore } from '@/stores/map/locations/mapLocationsStore'
import { useMapStore } from '@/stores/map/mapStore'

const mapStore = useMapStore()
const geolocationStore = useGeolocationStore()
const mapLocationsStore = useMapLocationsStore()
const mapDirectionsStore = useMapDirectionsStore()
const globalStore = useGlobalStore()
const zoom = ref(10)
const center = ref([47.31322, -1.319482])

let headerHeight = null
const mapDOM = ref(null)

function setHeaderHeight() {
  headerHeight = document.querySelector('header').clientHeight
}

async function initLocationsAroundUser() {
  await mapLocationsStore.fetchLocations()
  mapStore.centerMap(geolocationStore.latitude, geolocationStore.longitude, 14)
  // mapStore.setZoom(18)
}

async function initMap() {
  try {
    globalStore.setLoading(true)
    await geolocationStore.getUserCountry()
    mapStore.setMapDOM(mapDOM.value)
    await nextTick()
    mapStore.centerMap(geolocationStore.latitude, geolocationStore.longitude)
    mapDirectionsStore.createRouteDOM()
    globalStore.setLoading(false)

    initLocationsAroundUser()
  } catch (e) {
    console.log(e)
  }
}

onBeforeMount(() => {
  setHeaderHeight()
})

watch(
  () => geolocationStore.latitude,
  (value, oldValue) => {
    // idea of this watcher is to trigger if there is a change in location, but the previous one was null.
    // this should cover the case when user manually enable location, or on first page visit.
    if (!oldValue && value) {
      mapStore.centerMap(geolocationStore.latitude, geolocationStore.longitude)
    }
  }
)
</script>

<style lang="scss">
.map-sidebar-wrapper {
  height: calc(100vh - 15rem);
}

@media only screen and (max-width: 640px) {
  .map-sidebar-wrapper {
    height: 40%;
  }
}
</style>
