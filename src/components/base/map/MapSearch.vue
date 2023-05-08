<template>
  <InputOpenAI
    :results="mapStore.searchResults"
    :value="mapStore.searchTerm"
    @input="mapStore.searchTerm = $event"
    @search="mapStore.search"
    @select="selectHandler"
  />
</template>

<script setup>
import InputOpenAI from '@/components/base/inputs/InputOpenAI.vue'
import { useMapStore } from '@/stores/map/map'

const mapStore = useMapStore()

function selectHandler(result) {
  if (result && result.x && result.y) {
    const location = [result.y, result.x]
    mapStore.searchAddress(location)
  }
}
</script>
