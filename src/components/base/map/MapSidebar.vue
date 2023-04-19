<template>
  <div v-if="mapStore.locations.length > 0" class="map-sidebar w-1/4 h-full box-">
    <div class="p-2 w-full h-full bg-white/[.5] backdrop-blur-sm overflow-auto">
      <h2 class="text-lg font-bold mb-2">Charging Spots</h2>
      <ul class="divide-y divide-gray-400">
        <li v-for="(location, index) in mapStore.locations" :key="index" class="py-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div
                :class="[location.status === 'Available' ? 'bg-green-500' : 'bg-red-500']"
                class="w-4 h-4 rounded-full mr-2"
              ></div>
              <div>
                <p class="text-sm font-medium">{{ location.name }}</p>
                <p class="text-xs text-gray-500">{{ location.address }}</p>
              </div>
            </div>
            <div>
              <button
                class="text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
                @click="showLocation(location)"
              >
                Show
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useMapStore } from '@/stores/map/map'

const mapStore = useMapStore()

function showLocation(location) {
  mapStore.resetLocationsActiveState()
  console.log(mapStore.mapDOM)
  mapStore.mapDOM.leafletObject.setView(location.latLng)
  location.active = true
}
</script>

<style lang="scss" scoped>
.map-sidebar {
  min-width: 20rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>