const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  size: {
    // would recommend storing any string values that you have as defaults across your models for both size and material to keep it inside of variables so they don't get mistyped anywhere and you can then use it over and over again
    type: Sequelize.STRING,
    defaultValue: 'medium',
    validate: {
      isIn: [['small', 'medium', 'large', 'x-large']]
    }
  },
  // consideration of all fields being relevant for a single product -> not just having material belonging to duck and not other types
  material: {
    type: Sequelize.STRING,
    defaultValue: '',
    validate: {
      isIn: [['yellow', 'purple', 'red', 'blue', 'gold', 'silver', '']]
    }
  },
  type: {
    type: Sequelize.STRING,
    defaultValue: 'misc',
    validate: {
      isIn: [['duck', 'accessory', 'preset', 'outfit', 'misc']]
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
    // deal with this in pennies -> integer
    // choose to format in the frontend / 100
    // getter method here and divide by 100 before you return
    // where does the math happen and it must happen in cents in order to be accurate
    type: Sequelize.DOUBLE,
    validate: {
      min: 0
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  description: {
    type: Sequelize.TEXT
    // default value
  },
  imageUrl: {
    type: Sequelize.STRING,
    // validating HERE with an isUrl
    defaultValue:
      'https://i.pinimg.com/236x/e5/fa/c0/e5fac036f69d94482006d9f02b90d14c.jpg'
  }
})

module.exports = Product
