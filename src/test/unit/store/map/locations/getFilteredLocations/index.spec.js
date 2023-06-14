import { describe, expect, test } from 'vitest'

import { getFilteredLocations } from '@/stores/map/locations/helpers/getFilteredLocations'
import { FILTER_LOCATIONS_DATA_SET } from '@/test/unit/store/map/locations/getFilteredLocations/dataSet'

describe('Testing helper method to filter locations from API - getFilteredLocations()', () => {
  FILTER_LOCATIONS_DATA_SET.forEach((dataSet) => {
    test(dataSet.description, () => {
      expect(getFilteredLocations(dataSet.locations)).toStrictEqual(dataSet.result)
    })
  })
})
