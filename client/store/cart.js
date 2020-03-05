import axios from 'axios'

const initialState = []

// ACTION CONSTANTS
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const DELETE_CART = 'DELETE_CART'

// ACTION CREATORS
const getCart = products => ({
  type: GET_CART,
  products
})

//I AM RETURNING PRODUCTS; SHOULD I ONLY RETURN THE PRODUCT ADDED???
const addToCart = product => ({
  type: ADD_TO_CART,
  product
})

const deleteFromCart = product => ({
  type: DELETE_FROM_CART,
  product
})

const deleteCart = () => ({
  type: DELETE_CART
})

// THUNK CREATORS
export const fetchCart = () => async dispatch => {
  try {
    const {data} = await axios.get(`/api/cart`)
    dispatch(getCart(data))
  } catch (error) {
    console.error(error)
  }
}

export const addToCartThunk = (
  productId,
  orderId,
  quantity
) => async dispatch => {
  try {
    const cart = await axios.put('/api/cart', {
      productId: productId,
      orderId: orderId,
      quantity: quantity
    })
    dispatch(addToCart(cart))
  } catch (err) {
    console.error(err)
    console.error(err.stack)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.products
    case ADD_TO_CART: {
      return [...state, action.product]
    }
    default: {
      return state
    }
  }
}
