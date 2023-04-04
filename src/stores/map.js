import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMapStore = defineStore('counter', () => {
  const searchTerm = ref('')

  function search() {
    // TODO add global search action
  }

  return { searchTerm, search }
})
