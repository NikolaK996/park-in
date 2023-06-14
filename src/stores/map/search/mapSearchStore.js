import { ref } from 'vue'

import { OpenStreetMapProvider } from 'leaflet-geosearch'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

export const useMapSearchStore = defineStore('mapSearch', () => {
  const searchTerm = ref('')
  const searchResults = ref([])
  const openStreetMap = new OpenStreetMapProvider()

  async function search() {
    if (searchTerm.value) {
      try {
        searchResults.value = await openStreetMap.search({ query: searchTerm.value })
      } catch (e) {
        toast.error('Fetching location details fails. Please try again!')
      }
    }
  }

  return {
    searchTerm,
    searchResults,
    search
  }
})
