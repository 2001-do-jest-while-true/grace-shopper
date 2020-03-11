const router = require('express').Router()
const {User, Order, ShippingAddress} = require('../db/models')
const {isAUser, adminsOnly, isYouOnly} = require('./access')

module.exports = router

router.get('/', isAUser, adminsOnly, async (req, res, next) => {
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

router.get('/:userId', isAUser, adminsOnly, async (req, res, next) => {
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

//could check if req.user is the same user as req.params.userId, removing the isAdmin from the req.body

router.put('/:userId', isAUser, adminsOnly, async (req, res, next) => {
  try {
    const foundUser = await User.findByPk(req.params.userId, {
      include: [{model: Order}, {model: ShippingAddress}]
    })
    const updatedUser = await foundUser.update(req.body)
    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
})

router.delete('/:userId', adminsOnly, async (req, res, next) => {
  try {
    const foundUser = await User.findByPk(req.params.userId)
    await foundUser.destroy()
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})
