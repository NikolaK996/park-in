import { ref } from 'vue'

export function useMapSearch() {
  const searchTerm = ref('')

  function search() {
    // TODO add global search action
  }

  return {
    searchTerm,
    search
  }
}