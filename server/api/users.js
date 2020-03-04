const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

// protect your routes.
// from people who are guests, logged in and maybe not admin
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
      attributes: [
        'username',
        'isAdmin',
        'imageUrl',
        'shippingAddress',
        'billingAddress',
        'email',
        // not something ever handled by the user themselves, handled by passport
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
