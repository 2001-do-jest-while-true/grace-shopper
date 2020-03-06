const Sequelize = require('sequelize')
const db = require('../db')

// sizes
const SML = 'small',
  MED = 'medium',
  LG = 'large',
  XL = 'x-large'

// types
const YLW_DK = 'yellow-duck'
const PRP_DK = 'purple-duck'
const RED_DK = 'red-duck'
const BLU_DK = 'blue-duck'
const GLD_DK = 'gold-duck'
const SLV_DK = 'silver-duck'
const ACCSS = 'accessory'
const PRSET = 'preset'
const OUTFT = 'outfit'
const MISC = 'misc'

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  size: {
    type: Sequelize.STRING,
    defaultValue: 'medium',
    validate: {
      isIn: [[SML, MED, LG, XL]]
    }
  },
  type: {
    type: Sequelize.STRING,
    defaultValue: 'misc',
    validate: {
      isIn: [
        [
          YLW_DK,
          PRP_DK,
          RED_DK,
          BLU_DK,
          GLD_DK,
          SLV_DK,
          ACCSS,
          PRSET,
          OUTFT,
          MISC
        ]
      ]
    }
  },
  category: {
    type: Sequelize.STRING,
    defaultValue: 'misc',
    validate: {
      isIn: [
        [
          'business/casual',
          'halloween',
          'medieval',
          'gamer',
          'summer',
          'xmas',
          'misc'
        ]
      ]
    }
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://i.pinimg.com/236x/e5/fa/c0/e5fac036f69d94482006d9f02b90d14c.jpg'
  }
})

module.exports = Product
