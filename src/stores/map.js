import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useGeolocation } from '@vueuse/core'

export const useMapStore = defineStore('counter', () => {
  const sideBarVisible = ref(false)
  const searchTerm = ref('')
  const locations = ref([
    {
      name: 'Spot A',
      address: '123 Main St, Anytown, USA',
      status: 'available'
    }
  ])
  const { coords, error } = useGeolocation()

  function search() {
    // TODO add global search action
  }

  function getCurrentCoordinates() {
    console.log(coords.value)
    if (
      !error.value &&
      coords.value.longitude !== Infinity &&
      typeof coords.value.longitude === 'number' &&
      coords.value.longitude !== Infinity &&
      typeof coords.value.latitude === 'number'
    ) {
      return [coords.value.latitude, coords.value.longitude]
    }

    return null
  }

  function toggleSidebar() {
    sideBarVisible.value = !sideBarVisible.value
  }

  return {
    searchTerm,
    search,
    locations,
    sideBarVisible,
    toggleSidebar,
    getCurrentCoordinates
  }
})
