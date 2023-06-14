import { ref } from 'vue'

import { defineStore } from 'pinia'

import { useMapLeaflet } from '@/composables/map/useMapLeaflet'

export const useMapStore = defineStore('counter', () => {
  const mapDOM = ref(null)
  const loading = ref(false)
  const showResults = ref(true)

  const { setMapDOM, centerMap, setZoom } = useMapLeaflet(mapDOM)

  return {
    loading,
    mapDOM,
    showResults,
    setMapDOM,
    centerMap,
    setZoom
  }
})
