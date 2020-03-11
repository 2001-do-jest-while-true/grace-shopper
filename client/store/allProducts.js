import axios from 'axios'
import history from '../history'

const initialState = []

// ACTION CONSTANTS
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'

// ACTION CREATORS

const getAllProducts = products => ({
  type: GET_ALL_PRODUCTS,
  products
})

const addProduct = product => ({
  type: ADD_PRODUCT,
  product
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

export const addProductThunk = product => async dispatch => {
  try {
    const {data} = await axios.post('/api/products', product)
    dispatch(addProduct(data))
    history.push('/home')
  } catch (error) {
    console.error(error)
  }
}

export const addDuckThunk = product => async dispatch => {
  try {
    const {data} = await axios.post('/api/products/duck?duck=true', product)
    dispatch(addProduct(data))
  } catch (error) {
    console.error(error)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.products
    case ADD_PRODUCT:
      return [...state, action.product]
    default: {
      return state
    }
  }
}
