const router = require('express').Router()
const {Order, User, OrderProduct} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let userId
    let user

    if (req.query.id) {
      userId = req.query.id
      user = await User.findOne({
        where: {
          id: userId
        },
        include: [Order]
      })
    }

    const active = user.orders.find(
      order => order.dataValues.status === 'active'
    )

    if (active) {
      res.json(active.dataValues.id)
    } else {
      const created = await Order.create({
        date: Date.now(),
        status: 'active',
        userId: userId
      })
      res.status(200).json(created.id)
    }
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const productId = req.body.productId
    const quantity = req.body.quantity
    const orderId = req.body.orderId
    if (!orderId) {
      const newOrder = await Order.create({
        productId: productId,
        quantity: quantity
      })
      res.json({orderId: newOrder.id, productId, quantity})
    } else {
      const [cart, created] = await OrderProduct.findOrCreate({
        where: {
          productId,
          orderId
        },
        defaults: {quantity: 1}
      })
      if (!created) cart.increment('quantity', {by: quantity})

      res.json({orderId, productId, quantity: cart.quantity})
    }
  } catch (err) {
    next(err)
  }
})

router.get('/:orderId', async (req, res, next) => {
  try {
    const products = await OrderProduct.findAll({
      where: {
        orderId: req.params.orderId
      },
      attributes: ['productId', 'quantity']
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})

// const {rows} = await OrderProduct.findAndCountAll({
//   where: {
//     orderId: active.dataValues.id
//   },
//   attributes: ['productId', 'quantity']
// })
