export function useMapLeaflet(mapDOM) {
  function setMapDOM(value) {
    mapDOM.value = value
  }

  /**
   * @param latitude - number
   * @param longitude - number
   * @param zoom - number
   */
  function centerMap(latitude, longitude, zoom) {
    if (latitude && longitude && mapDOM.value && mapDOM.value.leafletObject) {
      if (typeof zoom === 'number') {
        mapDOM.value.leafletObject.setView([latitude, longitude], zoom)
      } else {
        mapDOM.value.leafletObject.setView([latitude, longitude])
      }
    }
  }

  /**
   * @param value - number
   */
  function setZoom(value) {
    if (mapDOM.value && mapDOM.value.leafletObject) {
      mapDOM.value.leafletObject.setZoom(value)
    }
  }

  return {
    setMapDOM,
    centerMap,
    setZoom
  }
}
