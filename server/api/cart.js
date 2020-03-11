const router = require('express').Router()
const {Order, User, OrderProduct, Product} = require('../db/models')
const {isYouOnly} = require('./access')

module.exports = router

// Gets a cart given an orderId
router.get(
  '/users/:userId/orders/:orderId',
  isYouOnly,
  async (req, res, next) => {
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
  }
)

// Returns an order number for the given user, or creates a new one
router.get('/users/:userId', isYouOnly, async (req, res, next) => {
  try {
    let userId
    let user

    if (req.params.userId) {
      userId = req.params.userId
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

// Adds/updates a completed order in the DB
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

// Updates the quantity of an item in the cart
router.put(
  '/update/users/:userId/orders/:orderId',
  isYouOnly,
  async (req, res, next) => {
    try {
      if (+req.params.orderId) {
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
      } else res.sendStatus(404)
    } catch (error) {
      next(error)
    }
  }
)

// Adds items to an order (also used for guest/user cart merge)
router.put(
  '/users/:userId/orders/:orderId',
  isYouOnly,
  async (req, res, next) => {
    try {
      const productArr = Object.entries(req.body)

      productArr.forEach(async ([prodId, quantity]) => {
        const [orderProduct] = await OrderProduct.findOrCreate({
          where: {
            orderId: req.params.orderId,
            productId: prodId
          },
          defaults: {quantity: 0}
        })

        orderProduct.quantity = orderProduct.quantity + quantity
        await orderProduct.save()
      })

      res.sendStatus(201)
    } catch (error) {
      next(error)
    }
  }
)

// Removes an item from an order
router.delete(
  '/users/:userId/orders/:orderId/:productId',
  isYouOnly,
  async (req, res, next) => {
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
  }
)
