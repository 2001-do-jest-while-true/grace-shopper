import axios from 'axios'

const initialState = []

// ACTION CONSTANTS
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_ITEM = 'DELETE_FROM_CART'
const DELETE_CART = 'DELETE_CART'

// ACTION CREATORS
const getCart = products => ({
  type: GET_CART,
  products
})

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

// export const addToCartThunk = (productId, orderId) => async dispatch => {
//   try {
//     const product = await axios.get(`/api/products/${productId}`)
//     const user = await axios.get(`/api/users/${userId}`)
//     const orders = user.data.orders
//     const activeOrderArr = orders.filter(order => order.status === 'active')
//     const activeOrder = activeOrderArr[0]
//     if (activeOrder.id) {
//       activeOrder.addProduct(product.data)
//       dispatch(addToCart(activeOrder))
//     } else {
//       const newOrder = await axios.post('/api/orders')
//       newOrder.addProduct(product.data)
//       dispatch(addToCart(newOrder))
//     }
//   } catch (err) {
//     console.error(err)
//     console.error(err.stack)
//   }
// }

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
