const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  date: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW
  },
  status: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['active', 'inactive', 'processing', 'fulfilled']]
    }
  }
  //getter method - may not be needed if handled on front end
})

module.exports = Order
