import L from 'leaflet'
import 'polyline-encoded'

export const getEncodedPolylinesFromRoute = (route) => {
  const polylines = []
  const chunkSize = 100

  if (route?.coordinates?.length) {
    for (let i = 0; i < route.coordinates.length; i += chunkSize) {
      const chunk = route.coordinates.slice(i, i + chunkSize)
      // map chunk from [{ lat: number, long: number }, { lat: number, long: number }] to [[number, number], [number, number]]
      const mappedChunk = chunk
        .map((item) => {
          if (item?.lat && item?.lng) {
            return [item.lat, item.lng]
          }

          return null
        })
        .filter((item) => item)

      if (mappedChunk.length) {
        const polyline = new L.Polyline(mappedChunk)
        polylines.push(polyline.encodePath())
      }
    }
  }

  return polylines
}
