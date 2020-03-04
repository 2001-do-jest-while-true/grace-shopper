const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  // purchase date
  date: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW
  },
  status: {
    type: Sequelize.STRING,
    validate: {
      // processing, fulfilled
      isIn: [['active', 'inactive']]
    }
  }
  // if you have any commented out code that you are considering reusing to put them in a separate working in progress branch so that your master branch remains as clean as possible - with maybe a "TODO" listed in the space where you had commented out code
  // get(){
  //   const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  //   const formatedDate = this.getDataValue('date').toLocaleString(undefined, dateOptions);
  //   return formatedDate;
  // }
})

module.exports = Order
