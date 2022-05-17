var APP_DATA = {
  "scenes": [
    {
      "id": "0-starbucks",
      "name": "Starbucks",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.43759393719522066,
        "pitch": 0,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -0.47527793356407955,
          "pitch": 0.05679251587048739,
          "rotation": 5.497787143782138,
          "target": "1-elevator"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.43759393719522066,
          "pitch": 0,
          "title": "Study Spaces",
          "text": "For both staff and students"
        },
        {
          "yaw": -2.805815510707715,
          "pitch": -0.12710948579957204,
          "title": "Starbucks Coffee Shop&nbsp;",
          "text": "Text"
        },
        {
          "yaw": -1.219764965274221,
          "pitch": -0.1349891681220612,
          "title": "Vending Machines",
          "text": "Filled with food and beverage items and essentials"
        }
      ]
    },
    {
      "id": "1-elevator",
      "name": "Elevator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 3.0521849186746364,
        "pitch": -0.09843888619153063,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 2.6732193718744792,
          "pitch": 0.18568594910274783,
          "rotation": 0.7853981633974483,
          "target": "0-starbucks"
        },
        {
          "yaw": -1.8162690602874658,
          "pitch": 0.13642088737206848,
          "rotation": 5.497787143782138,
          "target": "2-tembusu-tree"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8433556488443799,
          "pitch": -0.10351142428191373,
          "title": "Stephen Riady Centre",
          "text": "It's amenities includes a rock climbing wall, two multipurpose sports hall, open-air swimming pool and a gym.&nbsp;"
        },
        {
          "yaw": -1.2812323171411926,
          "pitch": -0.054497920944077904,
          "title": "Escalator to the second level",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-tembusu-tree",
      "name": "Tembusu Tree",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.8424154889498077,
        "pitch": -0.13794130287686635,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -2.490976593452741,
          "pitch": 0.1487717036962355,
          "rotation": 0.7853981633974483,
          "target": "1-elevator"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7657366373922585,
          "pitch": 0.18971685387474935,
          "title": "Tembusu Tree",
          "text": "A native tree to Singapore and its illustration can be found on the $5 Singaporean note.&nbsp;"
        },
        {
          "yaw": 2.1615944654059636,
          "pitch": 0.222558144519315,
          "title": "Sets of benches",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
