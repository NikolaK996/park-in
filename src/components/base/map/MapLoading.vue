<template>
  <l-control>
    <div
      v-if="mapStore.fetching"
      class="p-1 bg-white border border-gray-200 hover:bg-gray-50 rounded-md shadow-md"
    >
      <spinners-default />
    </div>
  </l-control>
</template>

<script setup>
import { LControl } from '@vue-leaflet/vue-leaflet'
import { useMapStore } from '@/stores/map/mapStore'
import SpinnersDefault from '@/components/base/spinners/SpinnersDefault.vue'

const mapStore = useMapStore()
</script>
