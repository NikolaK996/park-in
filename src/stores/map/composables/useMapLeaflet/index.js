import { ref } from 'vue'

export function useMapLeaflet() {
  let mapDOM = ref(null)
  const showResults = ref(true)

  function setMapDOM(value) {
    mapDOM.value = value
  }

  /**
   * @param location - Array[number, number] - Array[longitude, latitude]
   */
  function centerMap(location) {
    if (location && mapDOM.value && mapDOM.value.leafletObject) {
      mapDOM.value.leafletObject.setView(location)
    }
  }

  return {
    mapDOM,
    showResults,
    setMapDOM,
    centerMap
  }
}
