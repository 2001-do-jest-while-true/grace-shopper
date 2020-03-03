const express = require('express')
const router = express.Router()
const {Product} = require('../db/models')

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)

    if (!product) res.sendStatus(404)
    else res.json(product)
  } catch (error) {
    next(error)
  }
})

module.exports = router
