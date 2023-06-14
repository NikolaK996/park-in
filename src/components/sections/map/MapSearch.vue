<template>
  <div class="relative flex items-center justify-center p-2 bg-gray-50">
    <input-search
      :results="mapSearchStore.searchResults"
      :value="mapSearchStore.searchTerm"
      @input="mapSearchStore.searchTerm = $event"
      @search="mapSearchStore.search"
      @select="selectHandler"
    />
    <InputOpenAI />
  </div>
</template>

<script setup>
import InputOpenAI from '@/components/base/inputs/InputOpenAI.vue'
import InputSearch from '@/components/base/inputs/InputSearch.vue'
import { useMapDirectionsStore } from '@/stores/map/directions/mapDirectionsStore'
import { useMapSearchStore } from '@/stores/map/search/mapSearchStore'

const mapSearchStore = useMapSearchStore()
const mapDirectionsStore = useMapDirectionsStore()

function selectHandler(result) {
  if (result && result.x && result.y) {
    mapDirectionsStore.setDirection(result.y, result.x)
  }
}
</script>
