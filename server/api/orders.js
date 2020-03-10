const router = require('express').Router()
const {Order, Product} = require('../db/models')

module.exports = router

router.get('/:userId/past-orders', async (req, res, next) => {
  try {
    const pastOrders = await Order.findAll({
      where: {
        userId: req.params.userId,
        status: 'inactive'
      },
      include: [{model: Product}]
    })
    const orderDict = {}
    pastOrders.forEach(order => {
      orderDict[order.id] = order.products
    })
    res.json(orderDict)
  } catch (err) {
    next(err)
  }
})
