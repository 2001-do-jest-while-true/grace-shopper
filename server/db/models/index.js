const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const db = require('../db')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.hasMany(Order, {foreignKey: 'userId'}) // not necessary to add the foreignKey here because it is automatic
Order.belongsTo(User)

const OrderProduct = db.define('order_product') // put this in its own file & add respective information in here

Product.belongsToMany(Order, {through: OrderProduct})
Order.belongsToMany(Product, {through: OrderProduct})
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Order,
  OrderProduct
}
