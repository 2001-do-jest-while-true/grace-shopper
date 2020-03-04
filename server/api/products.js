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

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    // if you have any 404s or other manually created status codes to pass them into next and let your error handling middleware take care of that instead of breaking out early.
    // const err = new Error('not found');
    // err.status = 404;
    // next(err)
    if (!product) res.sendStatus(404)
    else res.json(product)
  } catch (error) {
    next(error)
  }
})

module.exports = router
