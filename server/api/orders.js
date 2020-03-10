const router = require('express').Router()
const {Order, Product} = require('../db/models')

module.exports = router

router.get('/:userId/past-orders', async (req, res, next) => {
  try {
    console.log('USERID', req.params.userId)
    const pastOrders = await Order.findAll({
      where: {
        userId: req.params.userId,
        status: 'inactive'
      },
      attribute: ['date'],
      include: [{model: Product}]
    })
    const orderDict = new Map()
    pastOrders.forEach(order => {
      const key = {}
      key[order.id] = order.date
      orderDict.set(key, order.products)
    })
    console.log('SENT ORDERDICT', orderDict)
    res.json(orderDict)
  } catch (err) {
    next(err)
  }
})
