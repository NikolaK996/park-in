<template>
  <l-control>
    <div
      v-if="mapStore.loading || mapLocationsStore.loading"
      class="p-1 bg-white border border-gray-200 hover:bg-gray-50 rounded-md shadow-md"
    >
      <spinners-default />
    </div>
  </l-control>
</template>

<script setup>
import { LControl } from '@vue-leaflet/vue-leaflet'

import SpinnersDefault from '@/components/base/spinners/SpinnersDefault.vue'
import { useMapLocationsStore } from '@/stores/map/locations/mapLocationsStore'
import { useMapStore } from '@/stores/map/mapStore'

const mapStore = useMapStore()
const mapLocationsStore = useMapLocationsStore()
</script>
