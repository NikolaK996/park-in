<template>
  <div class="flex">
    <main class="flex-1">
      <div
        v-if="headerHeight"
        :style="{ height: `calc(100vh - ${headerHeight}px` }"
        class="relative w-full flex flex-col"
      >
        <map-search />
        <div class="absolute map-sidebar-wrapper top-24 left-20 z-2">
          <MapSidebar />
        </div>
        <l-map ref="mapDOM" :center="[47.31322, -1.319482]" :zoom="zoom" @ready="initMap">
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
import { ref } from 'vue'
import 'leaflet/dist/leaflet.css'
import { LControl, LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
import MapLocationMarker from '@/components/base/map/MapLocationMarker.vue'
import MapSearch from '@/components/base/map/MapSearch.vue'
import MapSidebar from '@/components/base/map/MapSidebar.vue'
import IconMarker from '@/components/base/icons/IconsMarker.vue'
import { useMapStore } from '@/stores/map/map'

const mapStore = useMapStore()
const zoom = ref(18)

let headerHeight = null
const mapDOM = ref(null)

function setHeaderHeight() {
  headerHeight = document.querySelector('header').clientHeight
}

function setUserCurrentLocation() {
  const currentLocation = mapStore.currentLocation
  console.log(currentLocation)

  if (currentLocation) {
    mapDOM.value.leafletObject.setView(currentLocation)
    console.log(mapDOM)
  }
}

setHeaderHeight()

async function initMap() {
  setUserCurrentLocation()
  mapStore.mapDOM = mapDOM.value
  mapStore.fetchLocations()
}
</script>

<style lang="scss" scoped>
.map-sidebar-wrapper {
  height: calc(100vh - 15rem);
}
</style>