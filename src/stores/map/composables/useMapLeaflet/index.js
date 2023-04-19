import { ref } from 'vue'

export function useMapLeaflet() {
  let mapDOM = ref(null)

  return {
    mapDOM
  }
}