import { ref } from 'vue'

import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const loading = ref(false)

  function setLoading(value) {
    loading.value = value
  }

  return {
    loading,
    setLoading
  }
})
