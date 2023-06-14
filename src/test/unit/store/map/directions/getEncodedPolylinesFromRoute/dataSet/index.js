export const POLYLINES_FROM_ROUTE_DATA_SET = [
  {
    route: null,
    result: [],
    description: 'test case 1 - route is null.'
  },
  {
    route: undefined,
    result: [],
    description: 'test case 2 - route is undefined.'
  },
  {
    route: {},
    result: [],
    description: 'test case 3 - route is empty object.'
  },
  {
    route: [],
    result: [],
    description: 'test case 4 - route is empty array.'
  },
  {
    route: {
      coordinates: null
    },
    result: [],
    description: 'test case 5 - route coordinates is null.'
  },
  {
    route: {
      coordinates: undefined
    },
    result: [],
    description: 'test case 6 - route coordinates is undefined.'
  },
  {
    route: {
      coordinates: {}
    },
    result: [],
    description: 'test case 7 - route coordinates is empty object.'
  },
  {
    route: {
      coordinates: []
    },
    result: [],
    description: 'test case 8 - route coordinates is empty array.'
  },
  {
    route: {
      coordinates: [{}]
    },
    result: [],
    description: 'test case 9 - there is one route coordinate but its empty object.'
  },
  {
    route: {
      coordinates: [
        {
          lat: undefined,
          long: undefined
        }
      ]
    },
    result: [],
    description: 'test case 10 - there is one route coordinate but its empty object.'
  },
  {
    route: {
      coordinates: [
        {
          lat: undefined,
          long: undefined
        }
      ]
    },
    result: [],
    description:
      'test case 11 - there is one route coordinate but latitude and longitude are undefined.'
  },
  {
    route: {
      coordinates: [
        {
          lat: 51.3866,
          lng: 5.43301
        },
        {
          lat: 51.38584,
          lng: 5.43319
        },
        {
          lat: 51.38533,
          lng: 5.43337
        },
        {
          lat: 51.38495,
          lng: 5.43354
        }
      ]
    },
    result: ['gmsxHicd`@vCc@dBc@jAa@'],
    description: 'test case 12 - valid route.'
  },
  {
    route: {
      coordinates: [
        {
          lat: 51.3866,
          lng: 5.43301
        },
        {
          lat: 51.38584,
          lng: 5.43319
        },
        {
          lat: undefined,
          lng: undefined
        },
        {
          lat: 51.38495,
          lng: 5.43354
        }
      ]
    },
    result: ['gmsxHicd`@vCc@pDeA'],
    description:
      'test case 13 - valid route includes one coordinate with latitude and longitude undefined.'
  },
  {
    route: {
      coordinates: [
        {
          lat: 51.4067,
          lng: 5.42228
        },
        {
          lat: 51.40683,
          lng: 5.42213
        },
        {
          lat: 51.40695,
          lng: 5.42197
        },
        {
          lat: 51.40706,
          lng: 5.42181
        },
        {
          lat: 51.40717,
          lng: 5.42164
        },
        {
          lat: 51.40727,
          lng: 5.42148
        },
        {
          lat: 51.40735,
          lng: 5.42134
        },
        {
          lat: 51.40746,
          lng: 5.42114
        },
        {
          lat: 51.40756,
          lng: 5.42093
        },
        {
          lat: 51.40764,
          lng: 5.42075
        },
        {
          lat: 51.40767,
          lng: 5.42068
        },
        {
          lat: 51.4077,
          lng: 5.4206
        },
        {
          lat: 51.40776,
          lng: 5.42042
        },
        {
          lat: 51.40786,
          lng: 5.42015
        },
        {
          lat: 51.40791,
          lng: 5.41998
        },
        {
          lat: 51.40797,
          lng: 5.4198
        },
        {
          lat: 51.40821,
          lng: 5.41897
        },
        {
          lat: 51.4083,
          lng: 5.41867
        },
        {
          lat: 51.4083,
          lng: 5.41867
        },
        {
          lat: 51.40847,
          lng: 5.41852
        },
        {
          lat: 51.40853,
          lng: 5.41848
        },
        {
          lat: 51.40857,
          lng: 5.41847
        },
        {
          lat: 51.4086,
          lng: 5.41848
        },
        {
          lat: 51.40864,
          lng: 5.41849
        },
        {
          lat: 51.40868,
          lng: 5.4185
        },
        {
          lat: 51.40878,
          lng: 5.4187
        },
        {
          lat: 51.40931,
          lng: 5.41962
        },
        {
          lat: 51.40962,
          lng: 5.42011
        },
        {
          lat: 51.40993,
          lng: 5.42055
        },
        {
          lat: 51.41031,
          lng: 5.42105
        },
        {
          lat: 51.41072,
          lng: 5.42152
        },
        {
          lat: 51.41112,
          lng: 5.42194
        },
        {
          lat: 51.41148,
          lng: 5.42229
        },
        {
          lat: 51.41185,
          lng: 5.42259
        },
        {
          lat: 51.41192,
          lng: 5.42264
        },
        {
          lat: 51.41207,
          lng: 5.42274
        },
        {
          lat: 51.41221,
          lng: 5.42283
        },
        {
          lat: 51.41254,
          lng: 5.42302
        },
        {
          lat: 51.41258,
          lng: 5.42304
        },
        {
          lat: 51.41282,
          lng: 5.42316
        },
        {
          lat: 51.41326,
          lng: 5.42333
        },
        {
          lat: 51.41361,
          lng: 5.42344
        },
        {
          lat: 51.41457,
          lng: 5.42381
        },
        {
          lat: 51.41489,
          lng: 5.42393
        },
        {
          lat: 51.41524,
          lng: 5.42407
        },
        {
          lat: 51.41534,
          lng: 5.42414
        },
        {
          lat: 51.41541,
          lng: 5.42418
        },
        {
          lat: 51.4155,
          lng: 5.42425
        },
        {
          lat: 51.41561,
          lng: 5.42433
        },
        {
          lat: 51.41574,
          lng: 5.42443
        },
        {
          lat: 51.41586,
          lng: 5.42454
        },
        {
          lat: 51.41596,
          lng: 5.42463
        },
        {
          lat: 51.41606,
          lng: 5.42476
        },
        {
          lat: 51.41614,
          lng: 5.42486
        },
        {
          lat: 51.41621,
          lng: 5.42496
        },
        {
          lat: 51.41627,
          lng: 5.42506
        },
        {
          lat: 51.41641,
          lng: 5.42531
        },
        {
          lat: 51.41647,
          lng: 5.42543
        },
        {
          lat: 51.41652,
          lng: 5.42555
        },
        {
          lat: 51.41657,
          lng: 5.42568
        },
        {
          lat: 51.41661,
          lng: 5.4258
        },
        {
          lat: 51.41668,
          lng: 5.42608
        },
        {
          lat: 51.41672,
          lng: 5.42631
        },
        {
          lat: 51.41675,
          lng: 5.42645
        },
        {
          lat: 51.41676,
          lng: 5.42662
        },
        {
          lat: 51.41678,
          lng: 5.42683
        },
        {
          lat: 51.4168,
          lng: 5.42708
        },
        {
          lat: 51.41682,
          lng: 5.4274
        },
        {
          lat: 51.41682,
          lng: 5.4274
        },
        {
          lat: 51.41684,
          lng: 5.42768
        },
        {
          lat: 51.41688,
          lng: 5.42794
        },
        {
          lat: 51.41689,
          lng: 5.42812
        },
        {
          lat: 51.41691,
          lng: 5.42853
        },
        {
          lat: 51.41697,
          lng: 5.42968
        },
        {
          lat: 51.417,
          lng: 5.43026
        },
        {
          lat: 51.417,
          lng: 5.43032
        },
        {
          lat: 51.41703,
          lng: 5.43076
        },
        {
          lat: 51.41703,
          lng: 5.43076
        },
        {
          lat: 51.41717,
          lng: 5.43069
        },
        {
          lat: 51.41727,
          lng: 5.43066
        },
        {
          lat: 51.41745,
          lng: 5.43064
        },
        {
          lat: 51.41775,
          lng: 5.43061
        },
        {
          lat: 51.41794,
          lng: 5.43055
        },
        {
          lat: 51.41811,
          lng: 5.43043
        },
        {
          lat: 51.41834,
          lng: 5.43015
        },
        {
          lat: 51.41854,
          lng: 5.42991
        },
        {
          lat: 51.4187,
          lng: 5.42976
        },
        {
          lat: 51.41883,
          lng: 5.42966
        },
        {
          lat: 51.41894,
          lng: 5.4296
        },
        {
          lat: 51.41906,
          lng: 5.42955
        },
        {
          lat: 51.4192,
          lng: 5.42949
        },
        {
          lat: 51.4194,
          lng: 5.42945
        },
        {
          lat: 51.41976,
          lng: 5.42939
        },
        {
          lat: 51.41992,
          lng: 5.4293
        },
        {
          lat: 51.41992,
          lng: 5.4293
        },
        {
          lat: 51.42162,
          lng: 5.42899
        },
        {
          lat: 51.42219,
          lng: 5.42892
        },
        {
          lat: 51.42254,
          lng: 5.42887
        },
        {
          lat: 51.42348,
          lng: 5.42874
        },
        {
          lat: 51.42522,
          lng: 5.42852
        },
        {
          lat: 51.42599,
          lng: 5.42842
        },
        {
          lat: 51.4273,
          lng: 5.42827
        },
        {
          lat: 51.42769,
          lng: 5.42821
        },
        {
          lat: 51.42904,
          lng: 5.42806
        },
        {
          lat: 51.42951,
          lng: 5.42799
        },
        {
          lat: 51.43001,
          lng: 5.42792
        },
        {
          lat: 51.43087,
          lng: 5.42775
        },
        {
          lat: 51.43218,
          lng: 5.42744
        },
        {
          lat: 51.43262,
          lng: 5.42732
        },
        {
          lat: 51.43359,
          lng: 5.42708
        },
        {
          lat: 51.43416,
          lng: 5.42694
        },
        {
          lat: 51.435,
          lng: 5.42672
        },
        {
          lat: 51.4355,
          lng: 5.42659
        },
        {
          lat: 51.4356,
          lng: 5.42658
        },
        {
          lat: 51.43569,
          lng: 5.42656
        },
        {
          lat: 51.43599,
          lng: 5.42651
        },
        {
          lat: 51.43624,
          lng: 5.42648
        },
        {
          lat: 51.43654,
          lng: 5.42646
        },
        {
          lat: 51.43676,
          lng: 5.42646
        },
        {
          lat: 51.43697,
          lng: 5.42646
        },
        {
          lat: 51.43707,
          lng: 5.42647
        },
        {
          lat: 51.4374,
          lng: 5.4265
        },
        {
          lat: 51.43756,
          lng: 5.42652
        },
        {
          lat: 51.43819,
          lng: 5.42663
        },
        {
          lat: 51.43949,
          lng: 5.42688
        },
        {
          lat: 51.43988,
          lng: 5.42695
        }
      ]
    },
    result: [
      '{jwxHg`b`@Y\\W^U^U`@S^OZUf@Sh@Ob@ELENKb@St@I`@Kb@o@dDQz@??a@\\KFG@EAGAGASg@iBwD}@aB}@wAkAcBqA}AoAsAgAeAiA{@MI]S[QaAe@GCo@WwAa@eAU_EiA_AWeA[SMMGQMUOYSWUSQSYOSMSKS[q@KWIWIYGWMw@Gm@E[Aa@Ci@Cq@C_A??Cw@Gs@Ac@CqAKeFEsB?KEwA??[LSDc@B{@De@Ja@Vm@v@g@n@_@\\YRUJWH[Jg@FgAJ_@P??sI|@qBLeAH{DX{Ij@',
      'mc{xHsfc`@eG\\mAJmG\\}ALcBLkD`@eG|@wAVaEn@qBZgDj@cBXS@QB{@Hq@D{@Bk@?i@?SAaAE_@C}BUcGq@mAM'
    ],
    description:
      'test case 14 - valid route that has more then 100 coordinates, so multiple chunks will be created.'
  }
]
