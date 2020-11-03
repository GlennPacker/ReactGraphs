const weekDays = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
}

export const graphData = [
    {
      "id": "Generation",
      "color": "red",
      data: [
        {
          "x": weekDays[new Date(1604391143644).getDay()],
          "y": 263
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24)).getDay()],
          "y": 142
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 2)).getDay()],
          "y": 94
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 3)).getDay()],
          "y": 185
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 4)).getDay()],
          "y": 28
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 5)).getDay()],
          "y": 271
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 6)).getDay()],
          "y": 168
        }
      ]
    },
    {
      "id": "Consumption",
      "color": "blue",
      "data": [
        {
          "x": weekDays[new Date(1604391143644).getDay()],
          "y": 205
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24)).getDay()],
          "y": 226
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 2)).getDay()],
          "y": 21
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 3)).getDay()],
          "y": 41
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 4)).getDay()],
          "y": 144
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 5)).getDay()],
          "y": 111
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 6)).getDay()],
          "y": 113
        }
      ]
    },
    {
      "id": "Battery",
      "color": "yellow",
      "data": [
        {
          "x": weekDays[new Date(1604391143644).getDay()],
          "y": 256
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24)).getDay()],
          "y": 49
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 2)).getDay()],
          "y": 38
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 3)).getDay()],
          "y": 176
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 4)).getDay()],
          "y": 130
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 5)).getDay()],
          "y": 270
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 6)).getDay()],
          "y": 195
        }
      ]
    },
    {
      "id": "Ground Floor Ring",
      "color": "hsl(304, 70%, 50%)",
      "data": [
        {
          "x": weekDays[new Date(1604391143644).getDay()],
          "y": 73
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24)).getDay()],
          "y": 120
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 2)).getDay()],
          "y": 154
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 3)).getDay()],
          "y": 213
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 4)).getDay()],
          "y": 78
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 5)).getDay()],
          "y": 180
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 6)).getDay()],
          "y": 22
        }
      ]
    },
    {
      "id": "Ground Floor Lights",
      "color": "hsl(167, 70%, 50%)",
      "data": [
        {
          "x": weekDays[new Date(1604391143644).getDay()],
          "y": 175
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24)).getDay()],
          "y": 141
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 2)).getDay()],
          "y": 223
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 3)).getDay()],
          "y": 298
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 4)).getDay()],
          "y": 158
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 5)).getDay()],
          "y": 110
        },
        {
          "x": weekDays[new Date(1604391143644 - (1000 * 60 * 60 * 24 * 6)).getDay()],
          "y": 253
        }
      ]
    }
  ]