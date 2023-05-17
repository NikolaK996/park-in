import { defineStore } from 'pinia'
import { useMapSearch } from '@/stores/map/composables/useMapSearch'
import { useMapSidebar } from '@/stores/map/composables/useMapSidebar'
import { useMapLocations } from '@/stores/map/composables/useMapLocations'
import { useMapLeaflet } from '@/stores/map/composables/useMapLeaflet'

export const useMapStore = defineStore('counter', () => {
  const { mapDOM, showResults, setMapDOM, centerMap } = useMapLeaflet()
  const { searchTerm, searchResults, search } = useMapSearch()
  const { sideBarVisible, toggleSidebar } = useMapSidebar()
  const { locations, userGeolocation, fetching, resetLocationsActiveState, fetchLocations } =
    useMapLocations()

  async function searchAddress(location) {
    centerMap(location)
    await fetchLocations(location)
  }

  return {
    mapDOM,
    showResults,
    searchTerm,
    searchResults,
    locations,
    sideBarVisible,
    userGeolocation,
    fetching,
    search,
    toggleSidebar,
    resetLocationsActiveState,
    fetchLocations,
    setMapDOM,
    centerMap,
    searchAddress
  }
})
