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
      const products = await OrderProduct.findAll({
        where: {
          orderId: active.id
        }
      })
      res.json(products)
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
      await active.addProduct(req.body)
      res.json(active.getProducts())
    }
  } catch (err) {
    next(err)
  }
})
