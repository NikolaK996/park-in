<template>
  <div v-if="locations.length > 0" class="map-sidebar absolute py-4 pl-16 top-0 left-0 w-1/4">
    <div class="p-2 w-full h-full bg-white/[.5] backdrop-blur-sm overflow-auto" @touch.stop>
      <button @click="toggleSidebar">{{ sideBarVisible ? 'Close' : 'Open' }} Sidebar</button>
      <h2 class="text-lg font-bold mb-2">Charging Spots</h2>
      <ul class="divide-y divide-gray-400">
        <li v-for="(location, index) in locations" :key="index" class="py-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div
                :class="[location.status === 'available' ? 'bg-green-500' : 'bg-red-500']"
                class="w-4 h-4 rounded-full mr-2"
              ></div>
              <div>
                <p class="text-sm font-medium">{{ location.name }}</p>
                <p class="text-xs text-gray-500">{{ location.address }}</p>
              </div>
            </div>
            <div>
              <button class="text-sm text-blue-500 hover:text-blue-700 focus:outline-none">
                Details
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useMapStore } from '@/stores/map'

const { locations, sideBarVisible, toggleSidebar } = useMapStore()
</script>

<style lang="scss" scoped>
.map-sidebar {
  height: calc(100vh - 160px);
  min-width: 20rem;
  z-index: 1000000;
}
</style>