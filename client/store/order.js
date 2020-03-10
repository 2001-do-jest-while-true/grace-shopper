import axios from 'axios'

const initialState = {}

//ACTION TYPE
const GET_PAST_ORDERS = 'GET_PAST_ORDERS'

//ACTION CREATOR
const getPastOrders = orders => ({
  type: GET_PAST_ORDERS,
  orders
})

//THUNK CREATOR
export const fetchPastOrders = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/orders/${userId}/past-orders`)
    dispatch(getPastOrders(data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PAST_ORDERS:
      return action.orders
    default:
      return state
  }
}
