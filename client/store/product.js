import axios from 'axios'
import Sequelize from 'sequelize'
import Order from '../../../server/db/models'

const initialState = {
  products: [],
  singleProduct: {},
  loading: true,
  cart: {}
}

// ACTION CONSTANTS

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'

// ACTION CREATORS

const getAllProducts = products => ({
  type: GET_ALL_PRODUCTS,
  products
})

const getSingleProduct = product => ({
  type: GET_SINGLE_PRODUCT,
  product
})

const addToCart = activeOrder => ({
  type: ADD_TO_CART,
  activeOrder
})

// THUNK CREATORS

export const fetchAllProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/products')
    dispatch(getAllProducts(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchSingleProduct = productId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${productId}`)
    dispatch(getSingleProduct(data))
  } catch (error) {
    console.error(error)
  }
}

export const addToCartThunk = (productId, userId) => async dispatch => {
  try {
    const product = await axios.get(`/api/users/${productId}`)
    const user = await axios.get(`/api/users/${userId}`)
    const activeOrder = user.orders.filter(order => order.status === 'active')
    if (activeOrder.length) {
      activeOrder.addProduct(product)
      dispatch(activeOrder)
    } else {
      const newOrder = Order.create({
        date: Sequelize.NOW(),
        status: 'active',
        userId: userId
      })
      newOrder.addProduct(product)
      dispatch(newOrder)
    }
  } catch (err) {
    console.error(err)
    console.error(err.stack)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, products: action.products, loading: false}
    case GET_SINGLE_PRODUCT: {
      return {...state, singleProduct: action.product}
    }
    case ADD_TO_CART: {
      return {...state, cart: action.activeOrder}
    }
    default: {
      return state
    }
  }
}
