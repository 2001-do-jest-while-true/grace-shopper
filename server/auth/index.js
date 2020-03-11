const router = require('express').Router()
const User = require('../db/models/user')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    let user
    if (req.body.userparam.includes('@')) {
      user = await User.findOne({where: {email: req.body.userparam}})
    } else {
      user = await User.findOne({where: {username: req.body.userparam}})
    }

    if (!user) {
      console.log('No such user found:', req.body.userparam)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.userparam)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))
//router.use('/facebook', require('./facebook'))
