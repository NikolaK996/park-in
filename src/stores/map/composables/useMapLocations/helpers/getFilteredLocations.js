export function getFilteredLocations(locations) {
  return locations.map((location) => ({
    name: location?.AddressInfo?.Title ?? '',
    address: '',
    latLng: [location?.AddressInfo?.Latitude ?? null, location?.AddressInfo?.Longitude ?? null],
    status: 'Available',
    active: false,
    country: location.AddressInfo.Country.Title
  }))
}
