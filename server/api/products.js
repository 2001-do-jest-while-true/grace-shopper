const express = require('express')
const router = express.Router()
const {Product} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    products ? res.status(200).json(products) : res.sendStatus(500)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
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

// router.put('/:productId', async(req, res, next) => {
//   try{

//   } catch (error) {
//     next(error)
//   }
// })

// router.delete('/:productId', async(req, res, next) => {
//   try{

//   } catch (error) {
//     next(error)
//   }
// })

module.exports = router
