export const FILTER_LOCATIONS_DATA_SET = [
  {
    locations: null,
    result: [],
    description: 'test case 1 - locations is null.'
  },
  {
    locations: undefined,
    result: [],
    description: 'test case 2 - locations is undefined.'
  },
  {
    locations: {},
    result: [],
    description: 'test case 3 - locations is empty object.'
  },
  {
    locations: [],
    result: [],
    description: 'test case 4 - locations is empty array.'
  },
  {
    locations: [null],
    result: [
      {
        address: '',
        country: '',
        id: null,
        latLng: null,
        name: '',
        status: 'Available'
      }
    ],
    description: 'test case 5 - locations is with null value.'
  },
  {
    locations: [undefined],
    result: [
      {
        address: '',
        country: '',
        id: null,
        latLng: null,
        name: '',
        status: 'Available'
      }
    ],
    description: 'test case 6 - locations is with undefined value.'
  },
  {
    locations: [{}],
    result: [
      {
        address: '',
        country: '',
        id: null,
        latLng: null,
        name: '',
        status: 'Available'
      }
    ],
    description: 'test case 7 - locations is with empty object.'
  }
]
