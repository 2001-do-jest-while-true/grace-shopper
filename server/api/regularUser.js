const router = require('express').Router()
const {User, Order} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: [
        {
          model: Order
        }
      ],
      attributes: [
        'username',
        'imageUrl',
        'shippingAddress',
        'billingAddress',
        'email'
      ]
    })
    user ? res.status(200).json(user) : res.sendStatus(404)
  } catch (error) {
    next(error)
  }
})
