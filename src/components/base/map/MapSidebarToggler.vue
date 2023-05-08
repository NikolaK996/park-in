<template>
  <l-control v-show="mapStore.locations.length" position="topleft">
    <div class="p-2 pb-1 bg-white border border-gray-200 rounded-md shadow-md">
      <label
        :title="
          mapStore.showResults
            ? 'Toggle to hide charging spots results'
            : 'Toggle to show charging spots results'
        "
        class="relative inline-flex items-center cursor-pointer shadow-2xl"
      >
        <input v-model="mapStore.showResults" class="sr-only peer" type="checkbox" value="" />
        <div
          class="w-11 h-6 bg-gray-200 peer-focus:outline-none border-2 border-gray-300 peer-checked:border-primary peer-focus:ring-primary dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
        />
      </label>
    </div>
  </l-control>
</template>

<script setup>
import { LControl } from '@vue-leaflet/vue-leaflet'
import { useMapStore } from '@/stores/map/map'

const mapStore = useMapStore()
</script>
