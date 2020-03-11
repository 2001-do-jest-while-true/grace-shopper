import axios from 'axios'
import history from '../history'

const initialState = {}

// ACTION CONSTANTS
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
const EDIT_PRODUCT = 'EDIT_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

// ACTION CREATORS
const getSingleProduct = product => ({
  type: GET_SINGLE_PRODUCT,
  product
})

const editProduct = product => ({
  type: EDIT_PRODUCT,
  product
})

const deleteProduct = product => ({
  type: DELETE_PRODUCT,
  product
})
// THUNK CREATORS

export const fetchSingleProduct = productId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${productId}`)
    dispatch(getSingleProduct(data))
  } catch (error) {
    console.error(error)
  }
}

export const editProductThunk = (productId, product) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/products/${productId}`, product)
    dispatch(editProduct(data))
  } catch (err) {
    console.error(err)
  }
}

export const deleteProductThunk = productId => dispatch => {
  try {
    axios.delete(`/api/products/${productId}`)
    dispatch(deleteProduct(productId))
    history.push('/home')
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT: {
      return action.product
    }
    case EDIT_PRODUCT: {
      return action.product
    }
    case DELETE_PRODUCT: {
      return initialState
    }
    default: {
      return state
    }
  }
}
