import axios from 'axios'

const initialState = {
  products: [],
  singleProduct: {}
}

const GET_PRODUCT = 'GET_PRODUCT'

const getProduct = product => ({
  type: GET_PRODUCT,
  product
})

export const fetchProduct = productId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${productId}`)
    dispatch(getProduct(data))
  } catch (error) {
    console.error(error)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT: {
      return {...state, singleProduct: action.product}
    }
    default: {
      return state
    }
  }
}
