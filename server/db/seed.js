const {User, Product} = require('./models')

const users = [
  {
    username: 'Cody',
    email: 'cody@email.com',
    password: 'abc',
    imageUrl: 'pugface.jpeg'
  },
  {
    username: 'Patty',
    email: 'patty@gmail.com',
    password: 'abc'
  },
  {
    username: 'Lauren',
    email: 'lauren@gmail.com',
    password: 'abc',
    imageUrl: 'angryduck.jpeg'
  },
  {
    username: 'Ayse',
    email: 'ayse@gmail.com',
    password: 'abc'
  },
  {
    username: 'Karen',
    email: 'karen@gmail.com',
    password: 'abc'
  },
  {
    username: 'Sarah',
    email: 'sarah@gmail.com',
    password: 'abc'
  },
  {
    username: 'David',
    email: 'david@gmail.com',
    password: 'abc'
  },
  {
    username: 'Ben',
    email: 'ben@gmail.com',
    password: 'abc'
  },
  {
    username: 'Nimit',
    email: 'nimit@gmail.com',
    password: 'abc',
    imageUrl: 'creepyduckava.png'
  },
  {
    username: 'Katie',
    email: 'katie@gmail.com',
    password: 'abc'
  }
]

const products = [
  {
    name: 'Devil Horns',
    type: 'hat',
    category: 'halloween',
    price: 10.0,
    quantity: 10,
    description: 'Evil but cute horns for your duck!',
    imageUrl: 'devil.png'
  },
  {
    name: 'Beret',
    type: 'hat',
    price: 19.99,
    quantity: 10,
    description: 'A fancy hat for your duck friend!',
    imageUrl: 'beret.png'
  },
  {
    name: 'Default Duck',
    type: 'duck',
    price: 100.0,
    quantity: 200,
    description: 'Basic duck.',
    imageUrl: 'basicduck.jpg'
  },
  {
    name: 'Mario Outfit',
    type: 'preset',
    category: 'gamer',
    price: 50.0,
    quantity: 20,
    description: "It's a me, Mario!",
    imageUrl: 'mario.png'
  },
  {
    name: 'Master Chief',
    type: 'preset',
    category: 'gamer',
    price: 60.0,
    quantity: 20,
    description: 'Badass.',
    imageUrl: 'masterchief.png'
  },
  {
    name: 'Chef Hat',
    type: 'hat',
    price: 9.99,
    quantity: 20,
    description: 'For your gourmet chef duck.',
    imageUrl: 'chef.png'
  },
  {
    name: 'Knight Armor',
    type: 'preset',
    category: 'medieval',
    price: 65.0,
    quantity: 35,
    description: "Shiny knight's armor for your duck.",
    imageUrl: 'knight.png'
  },
  {
    name: 'Business Suit',
    type: 'outfit',
    category: 'business/casual',
    price: 40.0,
    quantity: 5,
    description: 'Wall street investor edition!',
    imageUrl: 'tux.jpg'
  },
  {
    name: 'Bikini',
    type: 'outfit',
    category: 'summer',
    price: 25.0,
    quantity: 30,
    description: 'Hot summer bod duck.',
    imageUrl: 'bikini.png'
  },
  {
    name: 'Gucci Sunglasses',
    type: 'accessory',
    category: 'summer',
    price: 200.0,
    quantity: 5,
    description: 'Designer sunglasses for the elegant duck.',
    imageUrl: 'sunglasses.jpg'
  }
]

users.forEach(user => {
  User.create(user)
})

products.forEach(product => {
  Product.create(product)
})
