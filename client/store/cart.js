import axios from 'axios'

const initialState = {
  orderId: 0,
  cart: {}
}

// ACTION CONSTANTS
const INITIALIZE_CART = 'INITIALIZE_CART'
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const DELETE_CART = 'DELETE_CART'

// ACTION CREATORS

const initializeCart = orderId => ({
  type: INITIALIZE_CART,
  orderId
})

const getCart = productsWithQuantity => ({
  type: GET_CART,
  productsWithQuantity
})

//I AM RETURNING PRODUCTS; SHOULD I ONLY RETURN THE PRODUCT ADDED???
const addToCart = productWithQuantity => ({
  type: ADD_TO_CART,
  productWithQuantity
})

const deleteFromCart = product => ({
  type: DELETE_FROM_CART,
  product
})

const deleteCart = () => ({
  type: DELETE_CART
})

// THUNK CREATORS
export const initializeCartThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/cart')
    dispatch(initializeCart(data))
  } catch (err) {
    console.error(err)
    console.error(err.stack)
  }
}

export const fetchCart = orderId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/cart/${orderId}`)
    console.log(data)
    dispatch(getCart(data))
  } catch (error) {
    console.error(error)
  }
}

export const addToCartThunk = (
  productId,
  quantity,
  orderId
) => async dispatch => {
  try {
    const newProduct = await axios.put('/api/cart', {
      productId: productId,
      quantity: quantity,
      orderId: orderId
    })
    dispatch(addToCart(newProduct))
  } catch (err) {
    console.error(err)
    console.error(err.stack)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_CART:
      return {...state, orderId: action.orderId}
    case GET_CART:
      let newCart = {}
      console.log(action.productsWithQuantity)
      action.productsWithQuantity.forEach(item => {
        newCart[item.productId] = item.quantity
      })
      return {...state, cart: newCart}
    case ADD_TO_CART:
      let updatedCart = {...state.cart}
      const productId = action.productWithQuantity.productId
      const quantity = action.productWithQuantity.quantity
      updatedCart[productId] = quantity
      return {...state, cart: updatedCart}
    default: {
      return state
    }
  }
}
