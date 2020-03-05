const router = require('express').Router()
const {User, Order} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
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

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: [{model: Order}],
      attributes: [
        'username',
        'isAdmin',
        'imageUrl',
        'shippingAddress',
        'billingAddress',
        'email',
        'googleId',
        'facebookId'
      ]
    })
    if (!user) res.sendStatus(404)
    else res.json(user)
  } catch (error) {
    next(error)
  }
})
