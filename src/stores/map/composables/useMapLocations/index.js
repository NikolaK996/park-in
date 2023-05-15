import { computed, ref } from 'vue'
import { useGeolocation } from '@vueuse/core'
import axios from 'axios'
import { getFilteredLocations } from '@/stores/map/composables/useMapLocations/helpers/getFilteredLocations'

export function useMapLocations() {
  const locations = ref([])
  const geolocation = useGeolocation()
  const userGeolocation = computed(() => {
    if (
      !geolocation.error.value &&
      geolocation.coords.value.longitude !== Infinity &&
      typeof geolocation.coords.value.longitude === 'number' &&
      geolocation.coords.value.longitude !== Infinity &&
      typeof geolocation.coords.value.latitude === 'number'
    ) {
      return [geolocation.coords.value.latitude, geolocation.coords.value.longitude]
    }

    return null
  })
  const fetching = ref(false)

  /**
   * @param location - Array[number, number] - Array[longitude, latitude]
   */
  async function fetchLocations(location) {
    try {
      fetching.value = true

      const longitude = location?.[1] ?? userGeolocation?.value?.[1] ?? null
      const latitude = location?.[0] ?? userGeolocation?.value?.[0] ?? null

      if (longitude && latitude) {
        const { data } = await axios.get('https://api.openchargemap.io/v3/poi', {
          params: {
            longitude,
            latitude,
            output: 'json',
            maxresults: 15,
            key: import.meta.env.VITE_OPEN_LOCATIONS_API_KEY
          }
        })

        locations.value = getFilteredLocations(data)
      }
    } catch (error) {
      console.warn(error)
    } finally {
      fetching.value = false
    }
  }

  function resetLocationsActiveState() {
    locations.value.forEach((item) => {
      item.active = false
    })
  }

  return {
    locations,
    userGeolocation,
    fetching,
    resetLocationsActiveState,
    fetchLocations
  }
}
