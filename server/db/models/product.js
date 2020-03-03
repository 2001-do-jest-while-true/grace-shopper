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
    type: Sequelize.STRING,
    defaultValue: 'medium',
    validate: {
      isIn: [['small', 'medium', 'large', 'x-large']]
    }
  },
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
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://i.pinimg.com/236x/e5/fa/c0/e5fac036f69d94482006d9f02b90d14c.jpg'
  }
})

module.exports = Product
