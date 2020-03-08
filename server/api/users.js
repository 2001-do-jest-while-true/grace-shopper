const router = require('express').Router()
const {User, Order, ShippingAddress} = require('../db/models')

module.exports = router

const adminsOnly = (req, res, next) => {
  if (!req.user.isAdmin) {
    const notAllowedError = new Error('This is illegal!')
    notAllowedError.status = 401
    return next(notAllowedError)
  }
  next()
}

router.get('/', adminsOnly, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'username', 'imageUrl', 'isAdmin']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', adminsOnly, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: [{model: Order}, {model: ShippingAddress}],
      attributes: ['username', 'isAdmin', 'imageUrl', 'billingAddress', 'email']
    })
    if (!user) res.sendStatus(404)
    else res.json(user)
  } catch (error) {
    next(error)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    console.log('This is the req.body', req.body)
    const addUser = await User.create(req.body)
    res.status(200).json(addUser)
  } catch (error) {
    next(error)
  }
})
