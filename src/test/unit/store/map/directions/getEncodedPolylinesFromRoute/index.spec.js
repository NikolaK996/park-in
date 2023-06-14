import { describe, expect, test } from 'vitest'

import { getEncodedPolylinesFromRoute } from '@/stores/map/directions/helpers/getEncodedPolylinesFromRoute'
import { POLYLINES_FROM_ROUTE_DATA_SET } from '@/test/unit/store/map/directions/getEncodedPolylinesFromRoute/dataSet'

describe('Testing helper method to calculate encoded polylines ready to be sent to API from route - getEncodedPolylinesFromRoute()', () => {
  POLYLINES_FROM_ROUTE_DATA_SET.forEach((dataSet) => {
    test(dataSet.description, () => {
      expect(getEncodedPolylinesFromRoute(dataSet.route)).toStrictEqual(dataSet.result)
    })
  })
})
