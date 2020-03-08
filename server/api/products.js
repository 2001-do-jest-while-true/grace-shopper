const express = require('express')
const router = express.Router()
const {Product} = require('../db/models')

//MIDDLEWARE FOR ADMIN-ACCESS-CONTROL
const adminsOnly = (req, res, next) => {
  if (!req.user.isAdmin) {
    const err = new Error('Not authorized!!!')
    err.status(401)
    next(err)
  }
  next()
}

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    products ? res.status(200).json(products) : res.sendStatus(500)
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
    res.redirect('/home')
  } catch (error) {
    next(error)
  }
})

module.exports = router
