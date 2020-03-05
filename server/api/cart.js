const router = require('express').Router()
const {Order, User, OrderProduct} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    const user = await User.findOne({
      where: {
        id: userId
      },
      include: [Order]
    })

    const active = user.orders.filter(
      order => order.dataValues.status === 'active'
    )
    if (active.id) {
      const {count, rows} = await OrderProduct.findAndCountAll({
        where: {
          orderId: active.id
        }
      })
      res.json(rows)
    } else {
      const created = await Order.create({
        date: Date.now(),
        status: 'active',
        userId: userId
      })
      res.json([])
    }
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const productId = req.body.productId
    const orderId = req.body.orderId
    const quantity = req.body.quantity

    const [cart, created] = await OrderProduct.findOrCreate({
      where: {
        productId,
        orderId
      },
      defaults: {quantity: 1}
    })

    if (!created) cart.increment('quantity', {by: quantity})

    const {count, rows} = await OrderProduct.findAndCountAll({
      where: orderId
    })
    res.json(rows)
  } catch (err) {
    next(err)
  }
})
