export function getFilteredLocations(locations) {
  const filteredLocations = []

  if (locations?.length) {
    locations.forEach((item) => {
      filteredLocations.push({
        name: item?.AddressInfo?.Title ?? '',
        address: '',
        latLng:
          item?.AddressInfo?.Latitude && item?.AddressInfo?.Longitude
            ? [item.AddressInfo.Latitude, item.AddressInfo.Longitude]
            : null,
        status: 'Available',
        country: item?.AddressInfo?.Country?.Title ?? '',
        id: item?.ID ?? null
      })
    })
  }

  return filteredLocations
}
