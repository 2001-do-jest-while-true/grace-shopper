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
export const addToCart = (productId, quantity) => ({
  type: ADD_TO_CART,
  productId,
  quantity
})

export const deleteFromCart = productId => ({
  type: DELETE_FROM_CART,
  productId
})

const deleteCart = () => ({
  type: DELETE_CART
})

// THUNK CREATORS
export const initializeCartThunk = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/cart?id=${userId}`)
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

// export const addToCartThunk = (
//   productId,
//   quantity,
//   orderId
// ) => async dispatch => {
//   try {
//     const newProduct = await axios.put('/api/cart', {
//       productId: productId,
//       quantity: quantity,
//       orderId: orderId
//     })
//     dispatch(addToCart(newProduct))
//   } catch (err) {
//     console.error(err)
//     console.error(err.stack)
//   }
// }

export default function(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_CART:
      return {...state, orderId: action.orderId}
    case GET_CART:
      let newCart = {}
      action.productsWithQuantity.forEach(item => {
        newCart[item.productId] = item.quantity
      })
      return {...state, cart: newCart}
    case ADD_TO_CART:
      let updatedCart = {...state.cart}
      if (updatedCart[action.productId]) {
        updatedCart[action.productId] =
          updatedCart[action.productId] + action.quantity
      } else {
        updatedCart[action.productId] = action.quantity
      }
      return {...state, cart: updatedCart}
    case DELETE_FROM_CART: {
      const updCart = {}
      const productEntries = Object.entries(state.cart)
      productEntries
        .filter(item => +item[0] !== action.productId)
        .forEach(item => {
          const prodId = item[0]
          const quantity = item[1]
          updCart[prodId] = quantity
        })
      return {...state, cart: updCart}
    }
    default: {
      return state
    }
  }
}
