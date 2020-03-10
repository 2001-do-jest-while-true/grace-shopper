const router = require('express').Router()
const {Order, User, OrderProduct, Product} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let userId
    let user
    // SARAH: With this logic, I believe you can also do a find or create on order, where the userId is userId, and status = 'active'

    // Order.findOrCreate({
    // where: {
    //     userId,
    //     status: 'active'
    //   }
    // })

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
      // SARAH: I believe you are also allowed to add the array of IDs
      // order.addProduct(productId, { through: { quantity: qty }})
      order.addProduct(product, {through: {quantity: qty}})
    })

    // Update order so that it is no longer the active cart
    const updated = await order.update({status: 'inactive'})
    // SARAH: Do you not want to send something back?
    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
})

// a PUT route on the orderId is fine
// What is the difference between this route and the other one?
router.put('/update/:orderId', async (req, res, next) => {
  try {
    if (+req.params.orderId) {
      // SARAH: remove console.log statements
      console.log('req.body', req.body)
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
})

router.put('/:orderId', async (req, res, next) => {
  try {
    const productArr = Object.entries(req.body)
    // Promise.each
    // map over this -> Promise.all
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
})

// /cart/:orderId

// /orders/:orderId -> GET /orders/?
// /users/:userId/cart
// -> req.user will always have their own orderId
// req.user.getOrder({ where: { status: 'active' } })

// May prefer this to be a PUT on the /:orderId with a req.body that includes the productId.
router.delete('/:orderId/products/:productId', async (req, res, next) => {
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
