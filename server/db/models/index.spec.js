const {expect} = require('chai')
const db = require('../db')
const seed = require('../../../script/seed')
const {User, Product, Order} = require('./index')

describe('Model Associations', () => {
  // before(() => async {
  //   await db.sync({ force: true })
  //   await User.sync({ force: true })
  //   ...
  // })
  before(() => db.sync({force: true}))
  afterEach(() => db.sync({force: true}))

  before(() => User.sync({force: true}))
  afterEach(() => User.sync({force: true}))

  before(() => Product.sync({force: true}))
  afterEach(() => Product.sync({force: true}))

  before(() => Order.sync({force: true}))
  afterEach(() => Order.sync({force: true}))

  describe('Sequelize Models', () => {
    it('user may have many orders', async () => {
      const user1 = await User.create({
        username: 'myUser',
        email: 'user@email.com',
        password: '1234'
      })
      const janOrder = await Order.create({date: '2020-03-01'})
      const febOrder = await Order.create({date: '2020-02-02'})

      await user1.setOrders([janOrder, febOrder])
      const userOrders = await user1.getOrders().map(order => order.date)
      expect(userOrders).to.deep.equal(['2020-03-01', '2020-02-02'])
    })

    it('an order will belong to a user', async () => {
      const userWithOrder = await User.create({
        username: 'helloUser',
        email: 'user123@email.com',
        password: '1005'
      })
      const newOrder = await Order.create({date: '2020-01-01'})
      await newOrder.setUser(userWithOrder)
      const newOrderUser = await newOrder.getUser()
      console.log(newOrderUser.username)
      // newOrderUser.username
      expect(newOrderUser.dataValues.username).to.deep.equal('helloUser')
    })
    it('a product may belong to many orders', async () => {
      const productWithManyOrders = await Product.create({name: 'PurpleDuck'})
      const order1 = await Order.create({date: '2005-12-01'})
      const order2 = await Order.create({date: '2007-01-03'})
      await productWithManyOrders.addOrders([order1, order2])
      const popularProduct = await productWithManyOrders
        .getOrders()
        .map(order => order.date)
      expect(popularProduct).to.deep.equal(['2005-12-01', '2007-01-03'])
    })
    it('an order may belong to/has many products', async () => {
      const productA = await Product.create({name: 'A'})
      const productB = await Product.create({name: 'B'})
      const orderWithManyProducts = await Order.create({date: '2009-04-23'})
      await orderWithManyProducts.addProducts([productA, productB])
      const largeOrder = await orderWithManyProducts
        .getProducts()
        .map(product => product.name)
      expect(largeOrder).to.deep.equal(['A', 'B'])
    })
  })

  describe('Seed File', () => {
    let products, orders
    beforeEach(async () => {
      await seed()
      products = await Product.findAll({include: [Order]})
      orders = await Order.findAll({include: [Product]})
    })

    it('creates at least one product that has no orders', () => {
      const productsWithNoOrders = products
        .filter(product => !product.orders.length)
        .map(product => product.name)
      expect(productsWithNoOrders).to.have.lengthOf.above(0)
    })

    it('creates at least one order with a single product', () => {
      const ordersWithSingleProduct = orders
        .filter(order => order.products.length === 1)
        .map(order => order.id)
      expect(ordersWithSingleProduct).to.have.lengthOf(1)
    })

    it('creates at least one product that has several orders', () => {
      const productsWithSeveralOrders = products
        .filter(product => product.orders.length > 1)
        .map(product => product.name)
      expect(productsWithSeveralOrders).to.have.lengthOf.above(0)
    })

    it('creates at least one order that has several products', () => {
      const ordersWithSeveralProducts = orders
        .filter(order => order.products.length > 1)
        .map(order => order.id)
      expect(ordersWithSeveralProducts).to.have.lengthOf.above(0)
    })
  })
})
