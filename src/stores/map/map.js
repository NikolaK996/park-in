import { defineStore } from 'pinia'
import { useMapSearch } from '@/stores/map/composables/useMapSearch'
import { useMapSidebar } from '@/stores/map/composables/useMapSidebar'
import { useMapLocations } from '@/stores/map/composables/useMapLocations'
import { useMapLeaflet } from '@/stores/map/composables/useMapLeaflet'

export const useMapStore = defineStore('counter', () => {
  const { mapDOM, setMapDOM } = useMapLeaflet()
  const { searchTerm, search } = useMapSearch()
  const { sideBarVisible, toggleSidebar } = useMapSidebar()
  const { locations, currentLocation, fetching, resetLocationsActiveState, fetchLocations } =
    useMapLocations()

  return {
    mapDOM,
    searchTerm,
    locations,
    sideBarVisible,
    currentLocation,
    fetching,
    search,
    toggleSidebar,
    resetLocationsActiveState,
    fetchLocations,
    setMapDOM
  }
})
