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
      isIn: [['active', 'inactive']]
    }
  }
  // get(){
  //   const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  //   const formatedDate = this.getDataValue('date').toLocaleString(undefined, dateOptions);
  //   return formatedDate;
  // }
})

module.exports = Order
