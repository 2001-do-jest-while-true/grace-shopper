import axios from 'axios'

const initialState = {
  orderId: 0,
  cart: {},
  pastOrders: {},
  loaded: false
}

// ACTION CONSTANTS
const INITIALIZE_CART = 'INITIALIZE_CART'
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const DELETE_CART = 'DELETE_CART'
const CHANGE_CART_QUANTITY = 'CHANGE_CART_QUANTITY'
const SET_CART = 'SET_CART'
const GET_PAST_ORDERS = 'GET_PAST_ORDERS'
// ACTION CREATORS

const initializeCart = orderId => ({
  type: INITIALIZE_CART,
  orderId
})

const getCart = productsWithQuantity => ({
  type: GET_CART,
  productsWithQuantity
})

export const setCart = cartObj => ({
  type: SET_CART,
  cartObj
})

//I AM RETURNING PRODUCTS; SHOULD I ONLY RETURN THE PRODUCT ADDED???
export const addToCart = newProducts => ({
  type: ADD_TO_CART,
  newProducts
})

export const deleteFromCart = productId => ({
  type: DELETE_FROM_CART,
  productId
})

export const changeCartQuantity = (productId, quantity) => ({
  type: CHANGE_CART_QUANTITY,
  productId,
  quantity
})

export const deleteCart = () => ({
  type: DELETE_CART
})

export const getPastOrders = pastOrders => ({
  type: GET_PAST_ORDERS,
  pastOrders
})

// THUNK CREATORS
export const initializeCartThunk = userId => async dispatch => {
  try {
    if (!userId) dispatch(initializeCart(0))
    else {
      const {data} = await axios.get(`/api/cart?id=${userId}`)
      dispatch(initializeCart(data))
    }
  } catch (err) {
    console.error(err)
    console.error(err.stack)
  }
}

export const fetchCart = orderId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/cart/${orderId}`)
    dispatch(getCart(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchPastOrders = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/${userId}/past-orders`)
    dispatch(getPastOrders(data))
  } catch (err) {
    console.error(err)
    console.error(err.stack)
  }
}

export const storeCart = cart => async dispatch => {
  try {
    const res = await axios.post('/api/cart', cart)
    dispatch(deleteCart())
  } catch (error) {
    console.error(error)
  }
}

export const addToCartThunk = (orderId, newProducts) => async dispatch => {
  try {
    const res = await axios.put(`/api/cart/${orderId}`, newProducts)
    dispatch(addToCart(newProducts))
  } catch (error) {
    console.error(error)
  }
}

export const updateQtyThunk = (
  orderId,
  productWithQuantity
) => async dispatch => {
  try {
    const {productId, quantity} = productWithQuantity
    const res = await axios.put(
      `/api/cart/update/${orderId}`,
      productWithQuantity
    )
    dispatch(changeCartQuantity(productId, quantity))
  } catch (error) {
    console.error(error)
  }
}

export const deleteFromCartThunk = (orderId, productId) => async dispatch => {
  try {
    const res = await axios.delete(`/api/cart/${orderId}/${productId}`)
    dispatch(deleteFromCart(productId))
  } catch (error) {
    console.error(error)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_CART:
      return {...state, orderId: action.orderId}

    case GET_CART: {
      let newCart = {}
      action.productsWithQuantity.forEach(item => {
        newCart[item.productId] = item.quantity
      })
      return {...state, cart: newCart, loaded: true}
    }
    case GET_PAST_ORDERS:
      let userHistory = {}
      action.pastOrders.forEach(order => {
        pastOders[order.productId] = order.quantity
      })
      return {state, pastOrders: userHistory}
    case SET_CART:
      return {...state, cart: action.cartObj}

    case ADD_TO_CART: {
      let updatedCart = {...state.cart}

      Object.entries(action.newProducts).forEach(([productId, quantity]) => {
        if (updatedCart[productId]) {
          updatedCart[productId] = updatedCart[productId] + quantity
        } else {
          updatedCart[productId] = quantity
        }
      })

      return {...state, cart: updatedCart}
    }

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

    case CHANGE_CART_QUANTITY: {
      const cartCopy = state.cart
      cartCopy[action.productId] = action.quantity
      return {...state, cart: cartCopy}
    }

    case DELETE_CART: {
      return {orderId: 0, cart: {}, loaded: false}
    }

    default: {
      return state
    }
  }
}
