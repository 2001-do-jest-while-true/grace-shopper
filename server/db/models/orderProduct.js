const Sequelize = require('sequelize')
const db = require('../db')

const OrderProduct = db.define('order_product', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 0
    }
  }
  // SARAH: Historical cost
})

module.exports = OrderProduct
