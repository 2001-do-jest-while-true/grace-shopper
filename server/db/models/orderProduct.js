const Sequelize = require('sequelize')
const db = require('../db')

const OrderProduct = db.define('order_product', {
  qty: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 0
    }
  }
})

module.exports = OrderProduct
