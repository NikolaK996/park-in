import { computed, ref } from 'vue'

import { useGeolocation } from '@vueuse/core'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useGeolocationStore = defineStore('geolocation', () => {
  const { coords, error, resume } = useGeolocation()
  const country = ref(null)

  const longitude = computed(() => {
    if (
      error.value ||
      coords.value.longitude === Infinity ||
      typeof coords.value.longitude !== 'number'
    ) {
      return country.value?.longitude ?? null
    }

    return coords.value.longitude
  })

  const latitude = computed(() => {
    if (
      error.value ||
      coords.value.latitude === Infinity ||
      typeof coords.value.latitude !== 'number'
    ) {
      return country.value?.latitude ?? null
    }

    return coords.value.latitude
  })

  async function getUserCountry() {
    try {
      const { data } = await axios.get('https://ipapi.co/json/')

      country.value = data
    } catch (error) {
      console.error('Error retrieving user country:', error)
    }
  }

  return {
    longitude,
    latitude,
    country,
    getUserCountry,
    resume,
    error
  }
})
