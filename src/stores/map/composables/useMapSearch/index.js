import { ref } from 'vue'
import { OpenStreetMapProvider } from 'leaflet-geosearch'

export function useMapSearch() {
  const searchTerm = ref('')
  const searchResults = ref([])
  const openStreetMap = new OpenStreetMapProvider()

  async function search() {
    if (searchTerm.value) {
      searchResults.value = await openStreetMap.search({ query: searchTerm.value })
    }
  }

  return {
    searchTerm,
    searchResults,
    search
  }
}
