import axios from 'axios'

const initialState = {}

// ACTION CONSTANTS
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

// ACTION CREATORS
const getSingleProduct = product => ({
  type: GET_SINGLE_PRODUCT,
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

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT: {
      return action.product
    }
    default: {
      return state
    }
  }
}
