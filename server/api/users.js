const router = require('express').Router()
const {User, Order, ShippingAddress} = require('../db/models')

module.exports = router

const isAUser = (req, res, next) => {
  if (!req.user) {
    const notUserError = new Error('Not a User')
    notUserError.status = 401
    return next(notUserError)
  }
  next()
}
const adminsOnly = (req, res, next) => {
  if (!req.user.isAdmin) {
    const notAdminError = new Error('Not an Admin')
    notAdminError.status = 401
    return next(notAdminError)
  }
  next()
}

const isYouOnly = (req, res, next) => {
  if (req.params.userId === req.user.id) {
    const notMeError = new Error('Not the right User')
    notMeError.status = 401
    return next(notMeError)
  }
  next()
}

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
    //console.log('This is the req.body', req.body)
    const addUser = await User.create(req.body)
    res.status(200).json(addUser)
  } catch (error) {
    next(error)
  }
})
