import { computed, ref } from 'vue'
import { useGeolocation } from '@vueuse/core'
import axios from 'axios'

export function useMapLocations() {
  const locations = ref([])
  const { coords, error } = useGeolocation()
  const currentLocation = computed(() => {
    coords.value
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
  })

  async function fetchLocations() {
    try {
      const { data } = await axios.get('https://api.openchargemap.io/v3/poi', {
        params: {
          output: 'json',
          maxresults: 2,
          key: import.meta.env.VITE_OPEN_LOCATIONS_API_KEY,
          longitude: currentLocation.value[1],
          latitude: currentLocation.value[0]
        }
      })

      locations.value = data.map((item) => ({
        name: item.AddressInfo.Title,
        address: '',
        latLng: [item.AddressInfo.Latitude, item.AddressInfo.Longitude],
        status: 'Available',
        active: false
      }))
    } catch (error) {
      console.warn(error)
    }
  }

  function resetLocationsActiveState() {
    locations.value.forEach((item) => {
      item.active = false
    })
  }

  return {
    locations,
    currentLocation,
    resetLocationsActiveState,
    fetchLocations
  }
}
