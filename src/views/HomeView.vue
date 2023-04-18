<template>
  <div class="flex">
    <main class="flex-1">
      <div
        v-if="headerHeight"
        :style="{ height: `calc(100vh - ${headerHeight}px` }"
        class="relative w-full"
      >
        <map-search />
        <MapSidebar />
        <l-map
          ref="map2"
          v-model:zoom="zoom"
          :auto-prevent-default="true"
          :center="center"
          @ready="test"
        >
          <l-tile-layer
            layer-type="base"
            name="OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <map-location-marker
            v-for="(marker, index) in mapStore.locations"
            :key="index"
            :lat-lng="marker.latLng"
          />
        </l-map>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
import MapLocationMarker from '@/components/base/map/MapLocationMarker.vue'
import MapSearch from '@/components/base/map/MapSearch.vue'
import MapSidebar from '@/components/base/map/MapSidebar.vue'
import { useMapStore } from '@/stores/map'

const mapStore = useMapStore()
const zoom = ref(18)

let headerHeight = null
const center = ref([47.31322, -1.319482])
const map2 = ref(null)

function setHeaderHeight() {
  headerHeight = document.querySelector('header').clientHeight
}

function init() {
  const currentCenter = mapStore.getCurrentCoordinates()

  if (currentCenter) {
    center.value = currentCenter
  }
  center.value = [22.31322, -10.319482]
}

setHeaderHeight()

function test() {
  console.log(map2.value.mapObject)
}
</script>