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
          class="absolute map-sidebar-wrapper top-24 left-20 z-2 w-1/4 sm:min-w-[20rem] min-w-[12rem]"
        >
          <MapSidebar />
        </div>
        <div
          v-if="mapStore.fetching"
          class="absolute w-full h-full flex backdrop-blur-sm items-center justify-center z-3"
        >
          <spinners-default />
        </div>
        <l-map ref="mapDOM" :center="center" :zoom="zoom" @ready="initMap">
          <l-control>
            <button
              class="p-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-md shadow-md"
              @click="setUserCurrentLocation"
            >
              <IconMarker />
            </button>
          </l-control>
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
import { LControl, LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
import MapLocationMarker from '@/components/base/map/MapLocationMarker.vue'
import MapSearch from '@/components/base/map/MapSearch.vue'
import MapSidebar from '@/components/base/map/MapSidebar.vue'
import IconMarker from '@/components/base/icons/IconsMarker.vue'
import { useMapStore } from '@/stores/map/map'
import SpinnersDefault from '@/components/base/spinners/SpinnersDefault.vue'

const mapStore = useMapStore()
const zoom = ref(18)
const center = ref([47.31322, -1.319482])

let headerHeight = null
const mapDOM = ref(null)

function setHeaderHeight() {
  headerHeight = document.querySelector('header').clientHeight
}

function setUserCurrentLocation() {
  const currentLocation = mapStore.currentLocation

  mapDOM.value.leafletObject
  if (currentLocation && mapDOM.value && mapDOM.value.leafletObject) {
    mapDOM.value.leafletObject.setView(currentLocation)
  }
}

function initCurrentLocation() {
  setUserCurrentLocation()
  mapStore.fetchLocations()
}

async function initMap() {
  mapStore.setMapDOM(mapDOM.value)
  await nextTick()
  initCurrentLocation()
}

setHeaderHeight()
watch(
  () => mapStore.currentLocation,
  (value, oldValue) => {
    // idea of this watcher is to trigger if there is a change in location, but the previous one was null.
    // this should cover the case when user manually enable location, or on first page visit.
    if (!oldValue && value) {
      console.log('qwe')
      initCurrentLocation()
    }
  },
  { deep: true }
)
</script>

<style lang="scss" scoped>
.map-sidebar-wrapper {
  height: calc(100vh - 15rem);
}
</style>