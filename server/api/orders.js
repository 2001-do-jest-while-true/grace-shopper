const router = require('express').Router()
const {Order} = require('../db/models')

module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create({
      date: Date.now(),
      status: 'active',
      userId: req.user.id
    })
    if (newOrder) res.json(newOrder)
    else {
      const err = new Error('Error creating a new order')
      err.status(500)
      next(err)
    }
  } catch (err) {
    next(err)
  }
})
