import { ref } from 'vue'

export function useMapLeaflet() {
  let mapDOM = ref(null)

  function setMapDOM(value) {
    mapDOM.value = value
  }

  return {
    mapDOM,
    setMapDOM
  }
}
