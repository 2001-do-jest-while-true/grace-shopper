const router = require('express').Router()
const {User, Order, ShippingAddress} = require('../db/models')

module.exports = router

// having a separate gatekeeping middleware file so that you don't need to repeat yourself and you will know where all of these exist
const adminsOnly = (req, res, next) => {
  // SARAH: If !req.user as well - you may also want to throw a 401
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

// SARAH: could check if req.user is the same user as req.params.userId, removing the isAdmin from the req.body

// SARAH: What about users editing their own profile?
router.put('/:userId', adminsOnly, async (req, res, next) => {
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

router.post('/signup', async (req, res, next) => {
  try {
    //console.log('This is the req.body', req.body)
    const addUser = await User.create(req.body)
    res.status(200).json(addUser)
  } catch (error) {
    next(error)
  }
})
