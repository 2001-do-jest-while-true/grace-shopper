const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmpty: false
    }
  },
  type: {
    type: Sequelize.STRING,
    defaultValue: 'misc',
    validate: {
      isIn: [['duck', 'accessory', 'preset', 'outfit', 'misc']],
    }
  },
  category: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['business/casual', 'halloween', 'medieval', 'gamer', 'summer', 'xmas']],
    }
  },
  price: {
    type: Sequelize.FLOAT,
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
    defaultValue: 'https://i.pinimg.com/236x/e5/fa/c0/e5fac036f69d94482006d9f02b90d14c.jpg'
  }
})

modules.export = Product;
