const express = require('express')
const router = express.Router()
const {Product, Order} = require('../db/models')

//MIDDLEWARE FOR ADMIN-ACCESS-CONTROL
const adminsOnly = (req, res, next) => {
  if (!req.user.isAdmin) {
    const err = new Error('Not authorized!!!')
    err.status(401)
    next(err)
  }
  next()
}

// SARAH: Optionally looking into router.param
// https://expressjs.com/en/5x/api.html#router.param

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    products ? res.status(200).json(products) : res.sendStatus(500) // 500 isn't very clear; it's saying that we may have done something wrong. Would prefer a 404 to say there are no products found.
  } catch (error) {
    next(error)
  }
})

router.post('/', adminsOnly, async (req, res, next) => {
  try {
    const product = req.body
    const newProduct = await Product.create(product)
    if (newProduct) res.json(newProduct)
    else {
      const err = new Error('Error creating product')
      err.status(500)
      next(err)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    if (!product) res.sendStatus(404)
    else res.json(product)
  } catch (error) {
    next(error)
  }
})

router.put('/:productId', adminsOnly, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    const editedOrder = await product.update(req.body)
    res.json(editedOrder)
  } catch (error) {
    next(error)
  }
})

router.delete('/:productId', async (req, res, next) => {
  try {
    const productToDelete = await Product.findByPk(req.params.productId)
    productToDelete.destroy()
    res.redirect('/')
  } catch (error) {
    next(error)
  }
})

module.exports = router
