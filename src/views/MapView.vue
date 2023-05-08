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
            v-for="(location, index) in mapStore.locations"
            :key="index"
            :location="location"
          />
        </l-map>
      </div>
    </main>
  </div>
</template>

<script setup>
import { nextTick, ref, watch } from 'vue'
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
import MapLocationMarker from '@/components/base/map/MapLocationMarker.vue'
import MapSearch from '@/components/base/map/MapSearch.vue'
import MapSidebar from '@/components/base/map/MapSidebar.vue'
import { useMapStore } from '@/stores/map/map'
import MapSidebarToggler from '@/components/base/map/MapSidebarToggler.vue'
import MapFindGeolocation from '@/components/base/map/MapFindGeolocation.vue'
import MapLoading from '@/components/base/map/MapLoading.vue'

const mapStore = useMapStore()
const zoom = ref(18)
const center = ref([47.31322, -1.319482])

let headerHeight = null
const mapDOM = ref(null)

function setHeaderHeight() {
  headerHeight = document.querySelector('header').clientHeight
}

function initUserGeolocation() {
  mapStore.centerMap(mapStore.userGeolocation)
  mapStore.fetchLocations()
}

async function initMap() {
  mapStore.setMapDOM(mapDOM.value)
  await nextTick()
  initUserGeolocation()
}

setHeaderHeight()
watch(
  () => mapStore.userGeolocation,
  (value, oldValue) => {
    // idea of this watcher is to trigger if there is a change in location, but the previous one was null.
    // this should cover the case when user manually enable location, or on first page visit.
    if (!oldValue && value) {
      initUserGeolocation()
    }
  },
  { deep: true }
)
</script>

<style lang="scss" scoped>
.map-sidebar-wrapper {
  height: calc(100vh - 15rem);
}

@media only screen and (max-width: 640px) {
  .map-sidebar-wrapper {
    height: 40%;
  }
}
</style>
