const router = require('express').Router()
const {Op} = require('sequelize')

const {Order, Product} = require('../db/models')

module.exports = router

router.get('/:userId/past-orders', async (req, res, next) => {
  try {
    const pastOrders = await Order.findAll({
      where: {
        userId: req.params.userId,
        status: 'inactive'
      },
      attribute: ['date'],
      include: [{model: Product}]
    })
    //DONT KNOW WHY THIS WONT RETURN ANYTHING?!
    // const orderDict = new Map()
    // pastOrders.forEach(order => {
    //   const key = {}
    //   key[order.id] = order.date
    //   orderDict.set(key, order.products)

    // })
    const orderDict = {}
    pastOrders.forEach(order => {
      const key = `${order.id}:${order.date}`
      orderDict[key] = order.products
    })
    res.json(orderDict)
  } catch (err) {
    next(err)
  }
})
