import axios from 'axios';

export default function( { params, store} ){

  let dataset = {
    "columns": {
      "GeoLocation": {
        "column_dtype": "string",
        "column_type": "categorical",
        "dtypes_stats": {
          "bool": 0,
          "date": 0,
          "float": 0,
          "int": 0,
          "missing": 0,
          "null": 7315,
          "string": 38401
        },
        "frequency": [{
            "count": 6214,
            "percentage": 13.59262,
            "value": "(0.000000, 0.000000)"
          },
          {
            "count": 4761,
            "percentage": 10.4143,
            "value": "(-71.500000, 35.666670)"
          },
          {
            "count": 3040,
            "percentage": 6.64975,
            "value": "(-84.000000, 168.000000)"
          },
          {
            "count": 1505,
            "percentage": 3.29206,
            "value": "(-72.000000, 26.000000)"
          },
          {
            "count": 657,
            "percentage": 1.43713,
            "value": "(-79.683330, 159.750000)"
          },
          {
            "count": 637,
            "percentage": 1.39339,
            "value": "(-76.716670, 159.666670)"
          },
          {
            "count": 539,
            "percentage": 1.17902,
            "value": "(-76.183330, 157.166670)"
          },
          {
            "count": 473,
            "percentage": 1.03465,
            "value": "(-79.683330, 155.750000)"
          },
          {
            "count": 263,
            "percentage": 0.57529,
            "value": "(-84.216670, 160.500000)"
          },
          {
            "count": 226,
            "percentage": 0.49436,
            "value": "(-86.366670, -70.000000)"
          }
        ],
        "name": "GeoLocation",
        "stats": {
          "missing_count": 7315,
          "p_missing": 16.0,
          "p_uniques": 36.499,
          "uniques_count": 16686
        }
      },
      "fall": {
        "column_dtype": "string",
        "column_type": "categorical",
        "dtypes_stats": {
          "bool": 0,
          "date": 0,
          "float": 0,
          "int": 0,
          "missing": 0,
          "null": 0,
          "string": 45716
        },
        "frequency": [{
            "count": 44609,
            "percentage": 97.57853,
            "value": "Found"
          },
          {
            "count": 1107,
            "percentage": 2.42147,
            "value": "Fell"
          }
        ],
        "name": "fall",
        "stats": {
          "missing_count": 0,
          "p_missing": 0.0,
          "p_uniques": 0.004,
          "uniques_count": 2
        }
      },
      "id": {
        "column_dtype": "int",
        "column_type": "numeric",
        "dtypes_stats": {
          "bool": 0,
          "date": 0,
          "float": 0,
          "int": 45716,
          "missing": 0,
          "null": 0,
          "string": 0
        },
        "frequency": [{
            "count": 1,
            "percentage": 0.00219,
            "value": 463
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": 4900
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": 4935
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": 5156
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": 7754
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": 12027
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": 15447
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": 18800
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": 148
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": 471
          }
        ],
        "hist": [{
            "lower": 1.0,
            "upper": 2873.85,
            "value": 0
          },
          {
            "lower": 2873.85,
            "upper": 5746.7,
            "value": 2505
          },
          {
            "lower": 5746.7,
            "upper": 8619.55,
            "value": 2084
          },
          {
            "lower": 8619.55,
            "upper": 11492.4,
            "value": 2844
          },
          {
            "lower": 11492.4,
            "upper": 14365.25,
            "value": 2837
          },
          {
            "lower": 14365.25,
            "upper": 17238.1,
            "value": 2831
          },
          {
            "lower": 17238.1,
            "upper": 20110.949999999997,
            "value": 2829
          },
          {
            "lower": 20110.949999999997,
            "upper": 22983.799999999996,
            "value": 2843
          },
          {
            "lower": 22983.799999999996,
            "upper": 25856.649999999994,
            "value": 2869
          },
          {
            "lower": 25856.649999999994,
            "upper": 28729.499999999993,
            "value": 2664
          },
          {
            "lower": 28729.499999999993,
            "upper": 31602.34999999999,
            "value": 2268
          },
          {
            "lower": 31602.34999999999,
            "upper": 34475.19999999999,
            "value": 2446
          },
          {
            "lower": 34475.19999999999,
            "upper": 37348.04999999999,
            "value": 1292
          },
          {
            "lower": 37348.04999999999,
            "upper": 40220.89999999999,
            "value": 2254
          },
          {
            "lower": 40220.89999999999,
            "upper": 43093.749999999985,
            "value": 1392
          },
          {
            "lower": 43093.749999999985,
            "upper": 45966.599999999984,
            "value": 392
          },
          {
            "lower": 45966.599999999984,
            "upper": 48839.44999999998,
            "value": 1486
          },
          {
            "lower": 48839.44999999998,
            "upper": 51712.29999999998,
            "value": 2694
          },
          {
            "lower": 51712.29999999998,
            "upper": 54585.14999999998,
            "value": 2403
          },
          {
            "lower": 54585.14999999998,
            "upper": 57457.99999999998,
            "value": 2241
          }
        ],
        "name": "id",
        "stats": {
          "coef_variation": 0.62703,
          "interquartile_range": 27968.0,
          "kurtosis": -1.1602608393254032,
          "mad": 13263.0,
          "max": 57458,
          "mean": 26889.73510368361,
          "median": 24261.0,
          "min": 1,
          "missing_count": 0,
          "na": 0,
          "p_missing": 0.0,
          "p_uniques": 92.67,
          "quantile": {
            "0.05": 2434.0,
            "0.25": 12688.0,
            "0.5": 24261.0,
            "0.75": 40656.0,
            "0.95": 54892.0
          },
          "range": 57457.0,
          "skewness": 0.26653721939302294,
          "stddev": 16860.68303027627,
          "sum": 1229291130,
          "uniques_count": 42365,
          "variance": 284282632.2474462,
          "zeros": 0
        }
      },
      "mass (g)": {
        "column_dtype": "float",
        "column_type": "numeric",
        "dtypes_stats": {
          "bool": 0,
          "date": 0,
          "float": 32526,
          "int": 13059,
          "missing": 0,
          "null": 131,
          "string": 0
        },
        "frequency": [{
            "count": 171,
            "percentage": 0.37405,
            "value": 1.2999999523162842
          },
          {
            "count": 140,
            "percentage": 0.30624,
            "value": 1.2000000476837158
          },
          {
            "count": 138,
            "percentage": 0.30186,
            "value": 1.399999976158142
          },
          {
            "count": 130,
            "percentage": 0.28436,
            "value": 2.0999999046325684
          },
          {
            "count": 126,
            "percentage": 0.27561,
            "value": 2.4000000953674316
          },
          {
            "count": 120,
            "percentage": 0.26249,
            "value": 1.600000023841858
          },
          {
            "count": 119,
            "percentage": 0.2603,
            "value": 0.5
          },
          {
            "count": 116,
            "percentage": 0.25374,
            "value": 1.100000023841858
          },
          {
            "count": 114,
            "percentage": 0.24937,
            "value": 3.799999952316284
          },
          {
            "count": 111,
            "percentage": 0.2428,
            "value": 1.5
          }
        ],
        "hist": [{
            "lower": 0.0,
            "upper": 3000000.0,
            "value": 0
          },
          {
            "lower": 3000000.0,
            "upper": 6000000.0,
            "value": 45564
          },
          {
            "lower": 6000000.0,
            "upper": 9000000.0,
            "value": 5
          },
          {
            "lower": 9000000.0,
            "upper": 12000000.0,
            "value": 2
          },
          {
            "lower": 12000000.0,
            "upper": 15000000.0,
            "value": 2
          },
          {
            "lower": 15000000.0,
            "upper": 18000000.0,
            "value": 2
          },
          {
            "lower": 18000000.0,
            "upper": 21000000.0,
            "value": 3
          },
          {
            "lower": 21000000.0,
            "upper": 24000000.0,
            "value": 2
          },
          {
            "lower": 24000000.0,
            "upper": 27000000.0,
            "value": 2
          },
          {
            "lower": 27000000.0,
            "upper": 30000000.0,
            "value": 1
          },
          {
            "lower": 30000000.0,
            "upper": 33000000.0,
            "value": 2
          }
        ],
        "name": "mass (g)",
        "stats": {
          "coef_variation": 43.30362,
          "interquartile_range": 195.4000062942505,
          "kurtosis": 6796.17060791067,
          "mad": 30.5,
          "max": 60000000.0,
          "mean": 13278.078548580497,
          "median": 32.599998474121094,
          "min": 0.0,
          "missing_count": 131,
          "na": 131,
          "p_missing": 0.29,
          "p_uniques": 27.376,
          "quantile": {
            "0.05": 1.100000023841858,
            "0.25": 7.199999809265137,
            "0.5": 32.599998474121094,
            "0.75": 202.60000610351562,
            "0.95": 4000.0
          },
          "range": 60000000.0,
          "skewness": 76.90758652549457,
          "stddev": 574988.8764104772,
          "sum": 605281210.6370419,
          "uniques_count": 12515,
          "variance": 330612207995.783,
          "zeros": 19
        }
      },
      "name": {
        "column_dtype": "string",
        "column_type": "categorical",
        "dtypes_stats": {
          "bool": 0,
          "date": 0,
          "float": 0,
          "int": 0,
          "missing": 0,
          "null": 0,
          "string": 45716
        },
        "frequency": [{
            "count": 1,
            "percentage": 0.00219,
            "value": "Diep River"
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": "Kulp"
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": "Tambakwatu"
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": "Wuzhi"
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": "Acfer 216"
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": "Acfer 290"
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": "Allan Hills 83017"
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": "Allan Hills 84050"
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": "Allan Hills 84065"
          },
          {
            "count": 1,
            "percentage": 0.00219,
            "value": "Allan Hills 84134"
          }
        ],
        "name": "name",
        "stats": {
          "missing_count": 0,
          "p_missing": 0.0,
          "p_uniques": 99.56,
          "uniques_count": 45515
        }
      },
      "nametype": {
        "column_dtype": "string",
        "column_type": "categorical",
        "dtypes_stats": {
          "bool": 0,
          "date": 0,
          "float": 0,
          "int": 0,
          "missing": 0,
          "null": 0,
          "string": 45716
        },
        "frequency": [{
            "count": 45641,
            "percentage": 99.83594,
            "value": "Valid"
          },
          {
            "count": 75,
            "percentage": 0.16406,
            "value": "Relict"
          }
        ],
        "name": "nametype",
        "stats": {
          "missing_count": 0,
          "p_missing": 0.0,
          "p_uniques": 0.004,
          "uniques_count": 2
        }
      },
      "recclass": {
        "column_dtype": "string",
        "column_type": "categorical",
        "dtypes_stats": {
          "bool": 0,
          "date": 0,
          "float": 0,
          "int": 0,
          "missing": 0,
          "null": 0,
          "string": 45716
        },
        "frequency": [{
            "count": 8285,
            "percentage": 18.12276,
            "value": "L6"
          },
          {
            "count": 7142,
            "percentage": 15.62254,
            "value": "H5"
          },
          {
            "count": 4796,
            "percentage": 10.49086,
            "value": "L5"
          },
          {
            "count": 4528,
            "percentage": 9.90463,
            "value": "H6"
          },
          {
            "count": 4211,
            "percentage": 9.21122,
            "value": "H4"
          },
          {
            "count": 2766,
            "percentage": 6.0504,
            "value": "LL5"
          },
          {
            "count": 2043,
            "percentage": 4.46889,
            "value": "LL6"
          },
          {
            "count": 1253,
            "percentage": 2.74083,
            "value": "L4"
          },
          {
            "count": 428,
            "percentage": 0.93621,
            "value": "H4/5"
          },
          {
            "count": 416,
            "percentage": 0.90997,
            "value": "CM2"
          }
        ],
        "name": "recclass",
        "stats": {
          "missing_count": 0,
          "p_missing": 0.0,
          "p_uniques": 0.971,
          "uniques_count": 444
        }
      },
      "reclat": {
        "column_dtype": "float",
        "column_type": "numeric",
        "dtypes_stats": {
          "bool": 0,
          "date": 0,
          "float": 38401,
          "int": 0,
          "missing": 0,
          "null": 7315,
          "string": 0
        },
        "frequency": [{
            "count": 6438,
            "percentage": 14.0826,
            "value": 0.0
          },
          {
            "count": 4761,
            "percentage": 10.4143,
            "value": -71.5
          },
          {
            "count": 3040,
            "percentage": 6.64975,
            "value": -84.0
          },
          {
            "count": 1506,
            "percentage": 3.29425,
            "value": -72.0
          },
          {
            "count": 1130,
            "percentage": 2.47178,
            "value": -79.6833267211914
          },
          {
            "count": 680,
            "percentage": 1.48744,
            "value": -76.71666717529297
          },
          {
            "count": 539,
            "percentage": 1.17902,
            "value": -76.1833267211914
          },
          {
            "count": 263,
            "percentage": 0.57529,
            "value": -84.21666717529297
          },
          {
            "count": 226,
            "percentage": 0.49436,
            "value": -86.36666870117188
          },
          {
            "count": 217,
            "percentage": 0.47467,
            "value": -86.71666717529297
          }
        ],
        "hist": [{
            "lower": -87.36666870117188,
            "upper": -78.9400016784668,
            "value": 0
          },
          {
            "lower": -78.9400016784668,
            "upper": -70.51333465576172,
            "value": 8308
          },
          {
            "lower": -70.51333465576172,
            "upper": -62.08666763305665,
            "value": 13790
          },
          {
            "lower": -62.08666763305665,
            "upper": -53.660000610351574,
            "value": 1
          },
          {
            "lower": -53.660000610351574,
            "upper": -45.2333335876465,
            "value": 1
          },
          {
            "lower": -45.2333335876465,
            "upper": -36.80666656494142,
            "value": 3
          },
          {
            "lower": -36.80666656494142,
            "upper": -28.379999542236344,
            "value": 38
          },
          {
            "lower": -28.379999542236344,
            "upper": -19.953332519531266,
            "value": 641
          },
          {
            "lower": -19.953332519531266,
            "upper": -11.526665496826187,
            "value": 529
          },
          {
            "lower": -11.526665496826187,
            "upper": -3.099998474121108,
            "value": 53
          },
          {
            "lower": -3.099998474121108,
            "upper": 5.326668548583971,
            "value": 43
          },
          {
            "lower": 5.326668548583971,
            "upper": 13.75333557128905,
            "value": 6463
          },
          {
            "lower": 13.75333557128905,
            "upper": 22.18000259399413,
            "value": 74
          },
          {
            "lower": 22.18000259399413,
            "upper": 30.606669616699207,
            "value": 3237
          },
          {
            "lower": 30.606669616699207,
            "upper": 39.03333663940428,
            "value": 2554
          },
          {
            "lower": 39.03333663940428,
            "upper": 47.46000366210936,
            "value": 1508
          },
          {
            "lower": 47.46000366210936,
            "upper": 55.88667068481443,
            "value": 633
          },
          {
            "lower": 55.88667068481443,
            "upper": 64.31333770751951,
            "value": 351
          },
          {
            "lower": 64.31333770751951,
            "upper": 72.74000473022458,
            "value": 149
          },
          {
            "lower": 72.74000473022458,
            "upper": 81.16667175292966,
            "value": 21
          }
        ],
        "name": "reclat",
        "stats": {
          "coef_variation": -1.18547,
          "interquartile_range": 76.71424102783203,
          "kurtosis": -1.4768000616006505,
          "mad": 12.76421,
          "max": 81.16667175292969,
          "mean": -39.12258010110455,
          "median": -71.5,
          "min": -87.36666870117188,
          "missing_count": 7315,
          "na": 7315,
          "p_missing": 16.0,
          "p_uniques": 28.165,
          "quantile": {
            "0.05": -84.35516357421875,
            "0.25": -76.71424102783203,
            "0.5": -71.5,
            "0.75": 0.0,
            "0.95": 34.49058151245117
          },
          "range": 168.53334045410156,
          "skewness": 0.4915911839652446,
          "stddev": 46.37851116080687,
          "sum": -1502346.198462516,
          "uniques_count": 12876,
          "variance": 2150.966297493088,
          "zeros": 6438
        }
      },
      "reclong": {
        "column_dtype": "float",
        "column_type": "numeric",
        "dtypes_stats": {
          "bool": 0,
          "date": 0,
          "float": 38401,
          "int": 0,
          "missing": 0,
          "null": 7315,
          "string": 0
        },
        "frequency": [{
            "count": 6214,
            "percentage": 13.59262,
            "value": 0.0
          },
          {
            "count": 4985,
            "percentage": 10.90428,
            "value": 35.66667175292969
          },
          {
            "count": 3040,
            "percentage": 6.64975,
            "value": 168.0
          },
          {
            "count": 1506,
            "percentage": 3.29425,
            "value": 26.0
          },
          {
            "count": 657,
            "percentage": 1.43713,
            "value": 159.75
          },
          {
            "count": 637,
            "percentage": 1.39339,
            "value": 159.6666717529297
          },
          {
            "count": 542,
            "percentage": 1.18558,
            "value": 157.1666717529297
          },
          {
            "count": 473,
            "percentage": 1.03465,
            "value": 155.75
          },
          {
            "count": 263,
            "percentage": 0.57529,
            "value": 160.5
          },
          {
            "count": 228,
            "percentage": 0.49873,
            "value": -70.0
          }
        ],
        "hist": [{
            "lower": -165.43333435058594,
            "upper": -139.4380012512207,
            "value": 0
          },
          {
            "lower": -139.4380012512207,
            "upper": -113.44266815185546,
            "value": 258
          },
          {
            "lower": -113.44266815185546,
            "upper": -87.44733505249022,
            "value": 450
          },
          {
            "lower": -87.44733505249022,
            "upper": -61.452001953124984,
            "value": 1257
          },
          {
            "lower": -61.452001953124984,
            "upper": -35.45666885375975,
            "value": 1600
          },
          {
            "lower": -35.45666885375975,
            "upper": -9.461335754394518,
            "value": 90
          },
          {
            "lower": -9.461335754394518,
            "upper": 16.533997344970714,
            "value": 78
          },
          {
            "lower": 16.533997344970714,
            "upper": 42.52933044433595,
            "value": 8903
          },
          {
            "lower": 42.52933044433595,
            "upper": 68.52466354370118,
            "value": 7026
          },
          {
            "lower": 68.52466354370118,
            "upper": 94.5199966430664,
            "value": 3238
          },
          {
            "lower": 94.5199966430664,
            "upper": 120.51532974243165,
            "value": 2694
          },
          {
            "lower": 120.51532974243165,
            "upper": 146.5106628417969,
            "value": 176
          },
          {
            "lower": 146.5106628417969,
            "upper": 172.50599594116213,
            "value": 661
          },
          {
            "lower": 172.50599594116213,
            "upper": 198.50132904052737,
            "value": 11776
          },
          {
            "lower": 198.50132904052737,
            "upper": 224.4966621398926,
            "value": 193
          }
        ],
        "name": "reclong",
        "stats": {
          "coef_variation": 1.32048,
          "interquartile_range": 157.1666717529297,
          "kurtosis": -0.7312421309648038,
          "mad": 39.53972,
          "max": 354.47332763671875,
          "mean": 61.07431878848027,
          "median": 35.66667175292969,
          "min": -165.43333435058594,
          "missing_count": 7315,
          "na": 7315,
          "p_missing": 16.0,
          "p_uniques": 32.175,
          "quantile": {
            "0.05": -90.36556243896484,
            "0.25": 0.0,
            "0.5": 35.66667175292969,
            "0.75": 157.1666717529297,
            "0.95": 168.0
          },
          "range": 519.9066619873047,
          "skewness": -0.17448956065997298,
          "stddev": 80.64729806550085,
          "sum": 2345314.915796431,
          "uniques_count": 14709,
          "variance": 6503.986685265737,
          "zeros": 6214
        }
      },
      "year": {
        "column_dtype": "date",
        "column_type": "date",
        "dtypes_stats": {
          "bool": 0,
          "date": 45428,
          "float": 0,
          "int": 0,
          "missing": 0,
          "null": 288,
          "string": 0
        },
        "frequency": [{
            "count": 3323,
            "percentage": 7.26879,
            "value": "01/01/2003 12:00:00 AM"
          },
          {
            "count": 3046,
            "percentage": 6.66288,
            "value": "01/01/1979 12:00:00 AM"
          },
          {
            "count": 2697,
            "percentage": 5.89947,
            "value": "01/01/1998 12:00:00 AM"
          },
          {
            "count": 2456,
            "percentage": 5.3723,
            "value": "01/01/2006 12:00:00 AM"
          },
          {
            "count": 2296,
            "percentage": 5.02231,
            "value": "01/01/1988 12:00:00 AM"
          },
          {
            "count": 2078,
            "percentage": 4.54545,
            "value": "01/01/2002 12:00:00 AM"
          },
          {
            "count": 1940,
            "percentage": 4.24359,
            "value": "01/01/2004 12:00:00 AM"
          },
          {
            "count": 1792,
            "percentage": 3.91985,
            "value": "01/01/2000 12:00:00 AM"
          },
          {
            "count": 1696,
            "percentage": 3.70986,
            "value": "01/01/1997 12:00:00 AM"
          },
          {
            "count": 1691,
            "percentage": 3.69892,
            "value": "01/01/1999 12:00:00 AM"
          }
        ],
        "name": "year",
        "stats": {
          "kurtosis": null,
          "max": "12/28/0860 12:00:00 AM",
          "mean": null,
          "min": "01/01/1583 12:00:00 AM",
          "missing_count": 288,
          "na": 288,
          "p_missing": 0.63,
          "p_uniques": 0.58,
          "skewness": null,
          "stddev": null,
          "sum": null,
          "uniques_count": 265,
          "variance": null,
          "zeros": 0
        }
      }
    },
    "count_types": {
      "categorical": 5,
      "date": 1,
      "null": 0,
      "numeric": 4
    },
    "rows_count": 45716,
    "size": "88.0MiB",
    "summary": {
      "cols_count": 10,
      "missing_count": "0.4891941552191793%",
      "rows_count": 45716,
      "size": "85.1MiB"
    }
  };

    store.commit('add', dataset);

}