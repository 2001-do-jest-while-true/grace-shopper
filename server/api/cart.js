const router = require('express').Router()
const {Order, User, OrderProduct, Product} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let userId
    let user

    if (req.query.id) {
      userId = req.query.id
      user = await User.findOne({
        where: {
          id: userId
        },
        include: [Order]
      })
    }

    const active = user.orders.find(
      order => order.dataValues.status === 'active'
    )

    if (active) {
      res.json(active.dataValues.id)
    } else {
      const created = await Order.create({
        date: Date.now(),
        status: 'active',
        userId: userId
      })
      res.status(200).json(created.id)
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    let {orderId, cart} = req.body
    let [order] = await Order.findOrCreate({where: {id: orderId}})

    // Adds all product-order relationships to the through table
    const cartEntries = Object.entries(cart)
    cartEntries.forEach(async item => {
      const prodId = item[0]
      const qty = item[1]
      const product = await Product.findOne({where: {id: prodId}})

      order.addProduct(product, {through: {quantity: qty}})
    })

    // Update order so that it is no longer the active cart
    const updated = await order.update({status: 'inactive'})

    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
})

router.put('/update/:orderId', async (req, res, next) => {
  try {
    const {productId, quantity} = req.body

    const orderProduct = await OrderProduct.findOne({
      where: {
        orderId: req.params.orderId,
        productId: productId
      }
    })

    if (orderProduct) {
      orderProduct.quantity = quantity
      await orderProduct.save()
      res.sendStatus(201)
    } else res.sendStatus(404)
  } catch (error) {
    next(error)
  }
})

router.put('/:orderId', async (req, res, next) => {
  try {
    const {productId, quantity} = req.body

    const [orderProduct] = await OrderProduct.findOrCreate({
      where: {
        orderId: req.params.orderId,
        productId: productId
      },
      defaults: {quantity: 0}
    })

    orderProduct.quantity = orderProduct.quantity + quantity
    await orderProduct.save()

    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
})

router.delete('/:orderId/:productId', async (req, res, next) => {
  try {
    await OrderProduct.destroy({
      where: {
        orderId: req.params.orderId,
        productId: req.params.productId
      }
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

router.get('/:orderId', async (req, res, next) => {
  try {
    const products = await OrderProduct.findAll({
      where: {
        orderId: req.params.orderId
      },
      attributes: ['productId', 'quantity']
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId/past-orders', async (req, res, next) => {
  try {
    const pastOrders = await Order.findAll({
      where: {
        userId: req.params.userId,
        status: 'inactive'
      }
    })
    pastOrders ? res.json(pastOrders) : res.json({})
  } catch (err) {
    next(err)
  }
})
