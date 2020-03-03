'use strict'

const db = require('../server/db')
const {User, Product, Order} = require('../server/db/models')

//USERS DUMMY DATA

//PRODUCTS DUMMY DATA
const products = [
  {
    name: 'Maïly',
    size: 'large',
    type: 'outfit',
    category: 'medieval',
    price: 443879.33,
    quantity: 434628,
    description: 'Function-based systemic function'
  },
  {
    name: 'Uò',
    size: 'large',
    material: 'yellow',
    type: 'accessory',
    category: 'xmas',
    price: 2122.46,
    quantity: 499254,
    description: 'User-centric dedicated algorithm',
    imageUrl: 'https://robohash.org/quidembeataeomnis.png?size=50x50&set=set1'
  },
  {
    name: 'Kallisté',
    size: 'small',
    material: 'silver',
    type: 'misc',
    category: 'xmas',
    price: 156268.61,
    quantity: 83047,
    description: 'Extended modular ability',
    imageUrl: 'https://robohash.org/facereevenietquis.png?size=50x50&set=set1'
  },
  {
    name: 'Gaëlle',
    size: 'small',
    material: 'blue',
    type: 'outfit',
    category: 'misc',
    price: 836363.81,
    quantity: 308120,
    description: 'Networked high-level parallelism',
    imageUrl: 'https://robohash.org/sapienteundeest.bmp?size=50x50&set=set1'
  },
  {
    name: 'Yóu',
    size: 'large',
    material: 'yellow',
    type: 'misc',
    category: 'medieval',
    price: 918442.67,
    quantity: 470774,
    description: 'Centralized interactive encryption',
    imageUrl: 'https://robohash.org/etdolordoloremque.jpg?size=50x50&set=set1'
  },
  {
    name: 'Mà',
    size: 'large',
    material: 'purple',
    type: 'preset',
    category: 'misc',
    price: 242375.09,
    quantity: 121625,
    description: 'Phased mobile matrix',
    imageUrl: 'https://robohash.org/consecteturearumea.bmp?size=50x50&set=set1'
  },
  {
    name: 'Séréna',
    size: 'medium',
    type: 'duck',
    category: 'business/casual',
    price: 470094.09,
    quantity: 512316,
    description: 'Object-based fresh-thinking circuit',
    imageUrl: 'https://robohash.org/doloresnonin.png?size=50x50&set=set1'
  },
  {
    name: 'Laïla',
    size: 'large',
    material: 'yellow',
    type: 'outfit',
    category: 'business/casual',
    price: 998485.75,
    quantity: 98423,
    description: 'Intuitive hybrid capacity',
    imageUrl:
      'https://robohash.org/consequuntursequiexercitationem.png?size=50x50&set=set1'
  },
  {
    name: 'Anaëlle',
    size: 'medium',
    material: 'red',
    type: 'misc',
    category: 'business/casual',
    price: 203468.94,
    quantity: 842956,
    description: 'Reverse-engineered content-based time-frame',
    imageUrl: 'https://robohash.org/explicaboeaut.bmp?size=50x50&set=set1'
  },
  {
    name: 'Faîtes',
    size: 'x-large',
    type: 'misc',
    category: 'medieval',
    price: 777200.0,
    quantity: 755436,
    description: 'Right-sized well-modulated local area network'
  },
  {
    name: 'Mélodie',
    size: 'x-large',
    type: 'outfit',
    category: 'business/casual',
    price: 451719.82,
    quantity: 474619,
    description: 'Universal systemic extranet',
    imageUrl: 'https://robohash.org/etoditvoluptatum.bmp?size=50x50&set=set1'
  },
  {
    name: 'Lucrèce',
    size: 'small',
    type: 'duck',
    category: 'xmas',
    price: 303491.4,
    quantity: 154577,
    description: 'Re-engineered discrete installation',
    imageUrl: 'https://robohash.org/estdoloresvelit.jpg?size=50x50&set=set1'
  },
  {
    name: 'Léonie',
    size: 'medium',
    type: 'preset',
    category: 'halloween',
    price: 887102.49,
    quantity: 414135,
    description: 'Pre-emptive intermediate neural-net',
    imageUrl: 'https://robohash.org/quonesciuntnon.bmp?size=50x50&set=set1'
  },
  {
    name: 'Eléa',
    size: 'medium',
    type: 'outfit',
    category: 'business/casual',
    price: 986653.37,
    quantity: 799749,
    description: 'Down-sized systemic info-mediaries'
  },
  {
    name: 'Loïc',
    size: 'medium',
    type: 'preset',
    category: 'summer',
    price: 622033.13,
    quantity: 773945,
    description: 'Streamlined motivating strategy'
  },
  {
    name: 'Vérane',
    size: 'medium',
    type: 'duck',
    category: 'summer',
    price: 80459.95,
    quantity: 109218,
    description: 'User-friendly discrete toolset',
    imageUrl: 'https://robohash.org/estsuscipitnon.bmp?size=50x50&set=set1'
  },
  {
    name: 'Véronique',
    size: 'small',
    type: 'misc',
    category: 'medieval',
    price: 369022.56,
    quantity: 548903,
    description: 'Re-engineered zero tolerance utilisation',
    imageUrl:
      'https://robohash.org/voluptassedvoluptates.jpg?size=50x50&set=set1'
  },
  {
    name: 'Méthode',
    size: 'medium',
    type: 'accessory',
    category: 'gamer',
    price: 778405.65,
    quantity: 587291,
    description: 'Programmable content-based open system'
  },
  {
    name: 'Léonie',
    size: 'large',
    type: 'misc',
    category: 'xmas',
    price: 547486.93,
    quantity: 895898,
    description: 'Digitized next generation data-warehouse'
  },
  {
    name: 'Naéva',
    size: 'x-large',
    material: 'purple',
    type: 'outfit',
    category: 'gamer',
    price: 593158.18,
    quantity: 872328,
    description: 'Digitized composite emulation',
    imageUrl:
      'https://robohash.org/voluptasvelaspernatur.png?size=50x50&set=set1'
  },
  {
    name: 'Réjane',
    size: 'x-large',
    material: 'blue',
    type: 'preset',
    category: 'misc',
    price: 559899.41,
    quantity: 280794,
    description: 'Re-engineered mobile attitude',
    imageUrl: 'https://robohash.org/utdeserunttempore.png?size=50x50&set=set1'
  },
  {
    name: 'Méthode',
    size: 'large',
    material: 'blue',
    type: 'misc',
    category: 'halloween',
    price: 236010.24,
    quantity: 831715,
    description: 'Devolved national infrastructure',
    imageUrl: 'https://robohash.org/optioetdolores.jpg?size=50x50&set=set1'
  },
  {
    name: 'Märta',
    size: 'medium',
    material: 'red',
    type: 'duck',
    category: 'gamer',
    price: 163491.93,
    quantity: 488735,
    description: 'Grass-roots 4th generation access'
  },
  {
    name: 'Laïla',
    size: 'large',
    type: 'accessory',
    category: 'business/casual',
    price: 462139.47,
    quantity: 829113,
    description: 'De-engineered grid-enabled task-force',
    imageUrl: 'https://robohash.org/etvoluptatemvel.jpg?size=50x50&set=set1'
  },
  {
    name: 'Naéva',
    size: 'large',
    type: 'duck',
    category: 'misc',
    price: 249058.62,
    quantity: 609816,
    description: 'Upgradable asymmetric alliance',
    imageUrl: 'https://robohash.org/remeumeos.png?size=50x50&set=set1'
  },
  {
    name: 'Chloé',
    size: 'large',
    material: 'purple',
    type: 'outfit',
    category: 'summer',
    price: 643223.41,
    quantity: 147391,
    description: 'Open-architected contextually-based project',
    imageUrl: 'https://robohash.org/noneadeleniti.png?size=50x50&set=set1'
  },
  {
    name: 'Zoé',
    size: 'large',
    type: 'preset',
    category: 'halloween',
    price: 444416.08,
    quantity: 400551,
    description: 'Progressive directional database',
    imageUrl: 'https://robohash.org/utliberosapiente.png?size=50x50&set=set1'
  },
  {
    name: 'Vénus',
    size: 'medium',
    type: 'accessory',
    category: 'misc',
    price: 51113.96,
    quantity: 75686,
    description: 'Right-sized value-added throughput',
    imageUrl: 'https://robohash.org/molestiaehicet.jpg?size=50x50&set=set1'
  },
  {
    name: 'Bénédicte',
    size: 'medium',
    material: 'yellow',
    type: 'preset',
    category: 'gamer',
    price: 911938.15,
    quantity: 242861,
    description: 'Mandatory coherent project'
  },
  {
    name: 'Solène',
    size: 'large',
    type: 'outfit',
    category: 'medieval',
    price: 901475.31,
    quantity: 563747,
    description: 'Organized background protocol',
    imageUrl: 'https://robohash.org/autdignissimosmagni.bmp?size=50x50&set=set1'
  },
  {
    name: 'Torbjörn',
    size: 'x-large',
    material: 'yellow',
    type: 'misc',
    category: 'medieval',
    price: 961376.82,
    quantity: 429221,
    description: 'Polarised global emulation',
    imageUrl: 'https://robohash.org/enimnostrumet.png?size=50x50&set=set1'
  },
  {
    name: 'Pål',
    size: 'small',
    material: 'silver',
    type: 'accessory',
    category: 'summer',
    price: 315921.44,
    quantity: 70578,
    description: 'Assimilated grid-enabled info-mediaries',
    imageUrl:
      'https://robohash.org/utconsecteturvoluptate.bmp?size=50x50&set=set1'
  },
  {
    name: 'Gisèle',
    size: 'x-large',
    type: 'duck',
    category: 'business/casual',
    price: 280290.0,
    quantity: 262399,
    description: 'Versatile 4th generation ability',
    imageUrl:
      'https://robohash.org/voluptatemsapienterepellendus.bmp?size=50x50&set=set1'
  },
  {
    name: 'Clémence',
    size: 'large',
    material: 'yellow',
    type: 'misc',
    category: 'xmas',
    price: 721681.77,
    quantity: 728375,
    description: 'Virtual analyzing time-frame'
  },
  {
    name: 'Maëlys',
    size: 'small',
    type: 'outfit',
    category: 'summer',
    price: 829480.98,
    quantity: 333986,
    description: 'Adaptive optimal projection',
    imageUrl: 'https://robohash.org/sitnequevoluptatum.png?size=50x50&set=set1'
  },
  {
    name: 'Noëlla',
    size: 'x-large',
    material: 'gold',
    type: 'accessory',
    category: 'business/casual',
    price: 187336.67,
    quantity: 868546,
    description: 'Customer-focused fresh-thinking infrastructure'
  },
  {
    name: 'Maïlys',
    size: 'medium',
    type: 'duck',
    category: 'summer',
    price: 248335.09,
    quantity: 744782,
    description: 'Customer-focused bottom-line utilisation'
  },
  {
    name: 'Maïlis',
    size: 'x-large',
    material: 'yellow',
    type: 'accessory',
    category: 'business/casual',
    price: 368841.77,
    quantity: 290476,
    description: 'Automated grid-enabled budgetary management',
    imageUrl: 'https://robohash.org/rationedelenitiaut.bmp?size=50x50&set=set1'
  },
  {
    name: 'Yáo',
    size: 'x-large',
    type: 'duck',
    category: 'misc',
    price: 612868.21,
    quantity: 814864,
    description: 'Visionary mission-critical moratorium'
  },
  {
    name: 'Cléa',
    size: 'small',
    material: 'yellow',
    type: 'duck',
    category: 'gamer',
    price: 73354.58,
    quantity: 604860,
    description: 'Focused maximized standardization',
    imageUrl: 'https://robohash.org/modienimquia.jpg?size=50x50&set=set1'
  },
  {
    name: 'Hélèna',
    size: 'large',
    type: 'outfit',
    category: 'xmas',
    price: 322591.98,
    quantity: 406727,
    description: 'Open-source responsive frame'
  },
  {
    name: 'Méng',
    size: 'large',
    type: 'misc',
    category: 'halloween',
    price: 23825.78,
    quantity: 110912,
    description: 'Centralized bottom-line encoding',
    imageUrl: 'https://robohash.org/deseruntsintdebitis.bmp?size=50x50&set=set1'
  },
  {
    name: 'Publicité',
    size: 'medium',
    material: 'blue',
    type: 'misc',
    category: 'summer',
    price: 903072.22,
    quantity: 916270,
    description: 'Multi-layered cohesive standardization',
    imageUrl: 'https://robohash.org/sitdoloresed.png?size=50x50&set=set1'
  },
  {
    name: 'Maïwenn',
    size: 'large',
    material: 'yellow',
    type: 'outfit',
    category: 'xmas',
    price: 116308.4,
    quantity: 364228,
    description: 'Self-enabling demand-driven functionalities',
    imageUrl:
      'https://robohash.org/praesentiumullamofficiis.bmp?size=50x50&set=set1'
  },
  {
    name: 'Cléa',
    size: 'small',
    material: 'purple',
    type: 'outfit',
    category: 'gamer',
    price: 548695.44,
    quantity: 342327,
    description: 'Re-engineered bandwidth-monitored software',
    imageUrl: 'https://robohash.org/deseruntetdebitis.jpg?size=50x50&set=set1'
  },
  {
    name: 'Pò',
    size: 'medium',
    material: 'red',
    type: 'duck',
    category: 'summer',
    price: 82687.47,
    quantity: 504052,
    description: 'Up-sized 5th generation archive',
    imageUrl: 'https://robohash.org/fugaestsapiente.jpg?size=50x50&set=set1'
  },
  {
    name: 'Crééz',
    size: 'small',
    material: 'red',
    type: 'duck',
    category: 'halloween',
    price: 398464.28,
    quantity: 82608,
    description: 'Monitored uniform migration',
    imageUrl: 'https://robohash.org/voluptatemullameos.jpg?size=50x50&set=set1'
  },
  {
    name: 'Mén',
    size: 'small',
    type: 'misc',
    category: 'misc',
    price: 839629.82,
    quantity: 390076,
    description: 'Fully-configurable multi-tasking model',
    imageUrl:
      'https://robohash.org/iuresimiliquenesciunt.png?size=50x50&set=set1'
  },
  {
    name: 'Cinéma',
    size: 'small',
    type: 'accessory',
    category: 'gamer',
    price: 922412.91,
    quantity: 96112,
    description: 'Devolved attitude-oriented structure',
    imageUrl:
      'https://robohash.org/etrepudiandaeratione.bmp?size=50x50&set=set1'
  },
  {
    name: 'Eloïse',
    size: 'x-large',
    type: 'outfit',
    category: 'misc',
    price: 280167.22,
    quantity: 733727,
    description: 'Optimized uniform matrices',
    imageUrl: 'https://robohash.org/etquiaet.bmp?size=50x50&set=set1'
  },
  {
    name: 'Aloïs',
    size: 'medium',
    type: 'misc',
    category: 'misc',
    price: 393374.54,
    quantity: 675199,
    description: 'Distributed client-driven alliance',
    imageUrl: 'https://robohash.org/nemoadet.jpg?size=50x50&set=set1'
  },
  {
    name: 'Cinéma',
    size: 'small',
    type: 'misc',
    category: 'summer',
    price: 421958.55,
    quantity: 28861,
    description: 'Optional encompassing capacity',
    imageUrl: 'https://robohash.org/doloribuseosdolorem.bmp?size=50x50&set=set1'
  },
  {
    name: 'Publicité',
    size: 'large',
    material: 'purple',
    type: 'misc',
    category: 'misc',
    price: 393389.85,
    quantity: 206103,
    description: 'Down-sized foreground policy',
    imageUrl:
      'https://robohash.org/laboreperspiciatisrem.bmp?size=50x50&set=set1'
  },
  {
    name: 'Yóu',
    size: 'small',
    material: 'yellow',
    type: 'accessory',
    category: 'gamer',
    price: 501149.22,
    quantity: 230871,
    description: 'Digitized empowering software'
  },
  {
    name: 'Maïwenn',
    size: 'medium',
    type: 'duck',
    category: 'misc',
    price: 324373.85,
    quantity: 337293,
    description: 'Face to face background benchmark',
    imageUrl: 'https://robohash.org/aquisest.jpg?size=50x50&set=set1'
  },
  {
    name: 'Angélique',
    size: 'medium',
    type: 'duck',
    category: 'summer',
    price: 913180.5,
    quantity: 888937,
    description: 'Synergized 24 hour groupware'
  },
  {
    name: 'Adèle',
    size: 'large',
    type: 'outfit',
    category: 'medieval',
    price: 312385.35,
    quantity: 387260,
    description: 'Ameliorated 6th generation neural-net',
    imageUrl:
      'https://robohash.org/officiisquisconsequuntur.png?size=50x50&set=set1'
  },
  {
    name: 'Desirée',
    size: 'medium',
    type: 'duck',
    category: 'medieval',
    price: 880040.56,
    quantity: 948748,
    description: 'Profit-focused didactic monitoring',
    imageUrl:
      'https://robohash.org/impeditvoluptatemexcepturi.jpg?size=50x50&set=set1'
  },
  {
    name: 'Lèi',
    size: 'small',
    type: 'outfit',
    category: 'business/casual',
    price: 113156.26,
    quantity: 41423,
    description: 'Reactive stable application',
    imageUrl:
      'https://robohash.org/perferendisnostrumcommodi.jpg?size=50x50&set=set1'
  },
  {
    name: 'Marlène',
    size: 'large',
    material: 'silver',
    type: 'outfit',
    category: 'summer',
    price: 603994.61,
    quantity: 123597,
    description: 'Vision-oriented radical open architecture',
    imageUrl:
      'https://robohash.org/maximeperspiciatisdolorem.png?size=50x50&set=set1'
  },
  {
    name: 'Dà',
    size: 'small',
    material: 'blue',
    type: 'preset',
    category: 'xmas',
    price: 83097.3,
    quantity: 841930,
    description: 'Intuitive bi-directional service-desk',
    imageUrl:
      'https://robohash.org/nullavoluptatemofficiis.jpg?size=50x50&set=set1'
  },
  {
    name: 'Célestine',
    size: 'small',
    type: 'outfit',
    category: 'summer',
    price: 882710.97,
    quantity: 321583,
    description: 'Inverse zero tolerance array',
    imageUrl: 'https://robohash.org/deseruntetomnis.jpg?size=50x50&set=set1'
  },
  {
    name: 'Fèi',
    size: 'medium',
    type: 'outfit',
    category: 'medieval',
    price: 347867.5,
    quantity: 340392,
    description: 'Universal responsive software',
    imageUrl: 'https://robohash.org/aliasilloblanditiis.png?size=50x50&set=set1'
  },
  {
    name: 'Eugénie',
    size: 'x-large',
    type: 'accessory',
    category: 'summer',
    price: 923628.4,
    quantity: 408209,
    description: 'Sharable real-time structure',
    imageUrl: 'https://robohash.org/corporisomnislibero.jpg?size=50x50&set=set1'
  },
  {
    name: 'Lyséa',
    size: 'large',
    type: 'outfit',
    category: 'halloween',
    price: 354524.46,
    quantity: 711481,
    description: 'Reverse-engineered 5th generation success',
    imageUrl:
      'https://robohash.org/eaquevoluptatemvoluptatem.bmp?size=50x50&set=set1'
  },
  {
    name: 'Médiamass',
    size: 'large',
    material: 'red',
    type: 'accessory',
    category: 'misc',
    price: 649795.73,
    quantity: 595024,
    description: 'Team-oriented foreground paradigm',
    imageUrl:
      'https://robohash.org/temporeconsecteturlaboriosam.png?size=50x50&set=set1'
  },
  {
    name: 'Daphnée',
    size: 'small',
    material: 'silver',
    type: 'preset',
    category: 'halloween',
    price: 397108.67,
    quantity: 424006,
    description: 'Seamless empowering leverage',
    imageUrl: 'https://robohash.org/adaliquamnisi.bmp?size=50x50&set=set1'
  },
  {
    name: 'Nuó',
    size: 'large',
    type: 'preset',
    category: 'medieval',
    price: 138780.44,
    quantity: 608462,
    description: 'Vision-oriented actuating attitude',
    imageUrl: 'https://robohash.org/suntsedminima.jpg?size=50x50&set=set1'
  },
  {
    name: 'Pò',
    size: 'small',
    type: 'accessory',
    category: 'business/casual',
    price: 762070.0,
    quantity: 664401,
    description: 'Networked interactive functionalities',
    imageUrl: 'https://robohash.org/etvelitdoloribus.png?size=50x50&set=set1'
  },
  {
    name: 'Marie-josée',
    size: 'large',
    material: 'blue',
    type: 'preset',
    category: 'xmas',
    price: 699142.55,
    quantity: 22671,
    description: 'Enterprise-wide regional system engine',
    imageUrl: 'https://robohash.org/magnianimivoluptate.png?size=50x50&set=set1'
  },
  {
    name: 'Marie-hélène',
    size: 'medium',
    type: 'preset',
    category: 'xmas',
    price: 20212.28,
    quantity: 744092,
    description: 'Seamless well-modulated project',
    imageUrl: 'https://robohash.org/commodisedratione.png?size=50x50&set=set1'
  },
  {
    name: 'Lauréna',
    size: 'x-large',
    material: 'gold',
    type: 'accessory',
    category: 'xmas',
    price: 291865.74,
    quantity: 691920,
    description: 'Exclusive local definition',
    imageUrl:
      'https://robohash.org/occaecatireprehenderitsed.bmp?size=50x50&set=set1'
  },
  {
    name: 'Josée',
    size: 'x-large',
    type: 'duck',
    category: 'halloween',
    price: 743099.29,
    quantity: 314353,
    description: 'Switchable analyzing encoding'
  },
  {
    name: 'Bérengère',
    size: 'x-large',
    material: 'yellow',
    type: 'misc',
    category: 'xmas',
    price: 595022.33,
    quantity: 877438,
    description: 'Focused mission-critical encryption',
    imageUrl: 'https://robohash.org/dolorquiaaut.bmp?size=50x50&set=set1'
  },
  {
    name: 'Örjan',
    size: 'x-large',
    material: 'gold',
    type: 'preset',
    category: 'xmas',
    price: 396428.57,
    quantity: 631477,
    description: 'Customer-focused bottom-line local area network',
    imageUrl:
      'https://robohash.org/placeatdebitispossimus.jpg?size=50x50&set=set1'
  },
  {
    name: 'Fèi',
    size: 'small',
    type: 'outfit',
    category: 'business/casual',
    price: 745121.65,
    quantity: 582872,
    description: 'Progressive systematic superstructure',
    imageUrl:
      'https://robohash.org/consequunturnemoaliquid.bmp?size=50x50&set=set1'
  },
  {
    name: 'Danièle',
    size: 'medium',
    material: 'blue',
    type: 'preset',
    category: 'misc',
    price: 51798.06,
    quantity: 997372,
    description: 'Phased fault-tolerant budgetary management',
    imageUrl:
      'https://robohash.org/quasirepudiandaeexercitationem.bmp?size=50x50&set=set1'
  },
  {
    name: 'Eléonore',
    size: 'large',
    type: 'outfit',
    category: 'halloween',
    price: 20884.92,
    quantity: 248747,
    description: 'Adaptive 3rd generation capacity',
    imageUrl:
      'https://robohash.org/voluptatemeiusexercitationem.jpg?size=50x50&set=set1'
  },
  {
    name: 'Crééz',
    size: 'medium',
    type: 'outfit',
    category: 'summer',
    price: 589732.42,
    quantity: 44472,
    description: 'Adaptive zero defect open architecture'
  },
  {
    name: 'Médiamass',
    size: 'medium',
    material: 'red',
    type: 'outfit',
    category: 'gamer',
    price: 356367.84,
    quantity: 487537,
    description: 'Self-enabling heuristic frame',
    imageUrl: 'https://robohash.org/quositquos.bmp?size=50x50&set=set1'
  },
  {
    name: 'Hélène',
    size: 'medium',
    type: 'misc',
    category: 'halloween',
    price: 179905.02,
    quantity: 808934,
    description: 'Optional multimedia data-warehouse',
    imageUrl: 'https://robohash.org/inenimfacilis.bmp?size=50x50&set=set1'
  },
  {
    name: 'Illustrée',
    size: 'medium',
    material: 'red',
    type: 'misc',
    category: 'halloween',
    price: 837383.29,
    quantity: 546917,
    description: 'Decentralized real-time Graphic Interface',
    imageUrl:
      'https://robohash.org/mollitiaquianesciunt.jpg?size=50x50&set=set1'
  },
  {
    name: 'Maïlys',
    size: 'x-large',
    type: 'misc',
    category: 'gamer',
    price: 31595.83,
    quantity: 464415,
    description: 'Open-architected incremental function',
    imageUrl: 'https://robohash.org/nullaevenietquia.bmp?size=50x50&set=set1'
  },
  {
    name: 'Tán',
    size: 'small',
    type: 'outfit',
    category: 'gamer',
    price: 610567.16,
    quantity: 326447,
    description: 'Mandatory 6th generation success',
    imageUrl: 'https://robohash.org/saepeundeodio.bmp?size=50x50&set=set1'
  },
  {
    name: 'Méthode',
    size: 'small',
    type: 'preset',
    category: 'misc',
    price: 414662.84,
    quantity: 371030,
    description: 'Multi-channelled reciprocal hub',
    imageUrl:
      'https://robohash.org/consequaturadipiscivoluptas.jpg?size=50x50&set=set1'
  },
  {
    name: 'Adélie',
    size: 'small',
    material: 'blue',
    type: 'accessory',
    category: 'medieval',
    price: 910876.36,
    quantity: 419748,
    description: 'Secured next generation internet solution',
    imageUrl: 'https://robohash.org/facilissunttempora.jpg?size=50x50&set=set1'
  },
  {
    name: 'Nuó',
    size: 'large',
    type: 'duck',
    category: 'halloween',
    price: 954082.53,
    quantity: 410653,
    description: 'Innovative zero tolerance adapter',
    imageUrl: 'https://robohash.org/reiciendisestdicta.png?size=50x50&set=set1'
  },
  {
    name: 'Léa',
    size: 'large',
    type: 'misc',
    category: 'business/casual',
    price: 229305.81,
    quantity: 46113,
    description: 'Reverse-engineered coherent function',
    imageUrl: 'https://robohash.org/optioquiatenetur.png?size=50x50&set=set1'
  },
  {
    name: 'Gaïa',
    size: 'medium',
    material: 'red',
    type: 'accessory',
    category: 'medieval',
    price: 204217.18,
    quantity: 664640,
    description: 'Triple-buffered explicit benchmark',
    imageUrl:
      'https://robohash.org/eaaccusantiumcorporis.jpg?size=50x50&set=set1'
  },
  {
    name: 'Adélie',
    size: 'small',
    material: 'silver',
    type: 'misc',
    category: 'xmas',
    price: 756862.64,
    quantity: 681228,
    description: 'Intuitive fault-tolerant extranet',
    imageUrl: 'https://robohash.org/inciduntcumeum.jpg?size=50x50&set=set1'
  },
  {
    name: 'Gaïa',
    size: 'small',
    type: 'outfit',
    category: 'gamer',
    price: 716197.0,
    quantity: 577688,
    description: 'Decentralized radical approach',
    imageUrl: 'https://robohash.org/dolorempariaturnisi.bmp?size=50x50&set=set1'
  },
  {
    name: 'Anaé',
    size: 'large',
    material: 'gold',
    type: 'accessory',
    category: 'misc',
    price: 444657.54,
    quantity: 8357,
    description: 'Function-based heuristic functionalities',
    imageUrl:
      'https://robohash.org/quidemtemporibusquia.png?size=50x50&set=set1'
  },
  {
    name: 'Agnès',
    size: 'large',
    material: 'purple',
    type: 'misc',
    category: 'business/casual',
    price: 181567.29,
    quantity: 5265,
    description: 'Mandatory object-oriented core',
    imageUrl: 'https://robohash.org/assumendavelut.jpg?size=50x50&set=set1'
  },
  {
    name: 'Maëlys',
    size: 'medium',
    type: 'preset',
    category: 'xmas',
    price: 206607.39,
    quantity: 180881,
    description: 'Profound mobile leverage',
    imageUrl: 'https://robohash.org/idcommodianimi.jpg?size=50x50&set=set1'
  },
  {
    name: 'Torbjörn',
    size: 'large',
    type: 'accessory',
    category: 'halloween',
    price: 720272.53,
    quantity: 323246,
    description: 'Optimized cohesive complexity',
    imageUrl: 'https://robohash.org/autindolorem.jpg?size=50x50&set=set1'
  },
  {
    name: 'Pénélope',
    size: 'medium',
    material: 'red',
    type: 'preset',
    category: 'halloween',
    price: 249935.39,
    quantity: 43055,
    description: 'De-engineered global hierarchy',
    imageUrl: 'https://robohash.org/eiusexcepturienim.jpg?size=50x50&set=set1'
  },
  {
    name: 'Cloé',
    size: 'x-large',
    type: 'duck',
    category: 'business/casual',
    price: 535261.82,
    quantity: 50610,
    description: 'Cross-platform national middleware',
    imageUrl: 'https://robohash.org/quisvoluptatemest.jpg?size=50x50&set=set1'
  },
  {
    name: 'Zhì',
    size: 'x-large',
    type: 'misc',
    category: 'medieval',
    price: 66846.93,
    quantity: 67178,
    description: 'Ameliorated motivating success',
    imageUrl: 'https://robohash.org/maioresatquequia.png?size=50x50&set=set1'
  },
  {
    name: 'Séverine',
    size: 'x-large',
    type: 'preset',
    category: 'business/casual',
    price: 86096.37,
    quantity: 642005,
    description: 'Grass-roots 24/7 open system',
    imageUrl: 'https://robohash.org/quidemsaepeporro.png?size=50x50&set=set1'
  },
  {
    name: 'Danièle',
    size: 'x-large',
    type: 'preset',
    category: 'gamer',
    price: 549866.53,
    quantity: 358404,
    description: 'Synchronised composite function'
  }
]

//ORDERS DUMMY DATA
const orders = [
  {
    userId: 95,
    date: '2019-12-14'
  },
  {
    userId: 21,
    date: '2012-02-09'
  },
  {
    userId: 63,
    date: '2015-07-15'
  },
  {
    userId: 18,
    date: '2014-07-07'
  },
  {
    userId: 38,
    date: '2016-06-26'
  },
  {
    userId: 10,
    date: '2018-04-24'
  },
  {
    userId: 22,
    date: '2010-02-17'
  },
  {
    userId: 76,
    date: '2010-02-11'
  },
  {
    userId: 63,
    date: '2019-09-12'
  },
  {
    userId: 68,
    date: '2007-04-04'
  },
  {
    userId: 20,
    date: '2012-03-17'
  },
  {
    userId: 25,
    date: '2008-12-30'
  },
  {
    userId: 30,
    date: '2014-08-04'
  },
  {
    userId: 83,
    date: '2007-06-01'
  },
  {
    userId: 76,
    date: '2008-05-28'
  },
  {
    userId: 10,
    date: '2009-01-03'
  },
  {
    userId: 88,
    date: '2008-09-16'
  },
  {
    userId: 8,
    date: '2007-09-04'
  },
  {
    userId: 53,
    date: '2013-08-26'
  },
  {
    userId: 64,
    date: '2009-02-12'
  },
  {
    userId: 90,
    date: '2019-06-23'
  },
  {
    userId: 59,
    date: '2013-04-11'
  },
  {
    userId: 76,
    date: '2008-10-06'
  },
  {
    userId: 41,
    date: '2012-12-20'
  },
  {
    userId: 90,
    date: '2014-05-04'
  },
  {
    userId: 44,
    date: '2017-12-28'
  },
  {
    userId: 59,
    date: '2019-06-09'
  },
  {
    userId: 95,
    date: '2008-10-07'
  },
  {
    userId: 18,
    date: '2010-03-30'
  },
  {
    userId: 32,
    date: '2017-11-20'
  },
  {
    userId: 40,
    date: '2019-04-16'
  },
  {
    userId: 42,
    date: '2008-01-12'
  },
  {
    userId: 14,
    date: '2013-05-06'
  },
  {
    userId: 38,
    date: '2012-11-09'
  },
  {
    userId: 32,
    date: '2015-11-06'
  },
  {
    userId: 66,
    date: '2014-01-30'
  },
  {
    userId: 50,
    date: '2014-12-02'
  },
  {
    userId: 97,
    date: '2019-08-03'
  },
  {
    userId: 38,
    date: '2009-08-29'
  },
  {
    userId: 51,
    date: '2016-05-04'
  },
  {
    userId: 87,
    date: '2017-04-02'
  },
  {
    userId: 47,
    date: '2008-06-23'
  },
  {
    userId: 72,
    date: '2018-08-01'
  },
  {
    userId: 29,
    date: '2014-03-30'
  },
  {
    userId: 89,
    date: '2015-03-11'
  },
  {
    userId: 29,
    date: '2013-07-11'
  },
  {
    userId: 84,
    date: '2013-04-22'
  },
  {
    userId: 78,
    date: '2016-07-26'
  },
  {
    userId: 53,
    date: '2019-02-12'
  },
  {
    userId: 44,
    date: '2019-11-30'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  await Promise.all(
    products.map(product => {
      return Product.create(product)
    })
  )

  await Promise.all(
    orders.map(order => {
      return Order.create(order)
    })
  )

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
