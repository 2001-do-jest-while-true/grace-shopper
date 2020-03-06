import axios from 'axios'
import history from '../history'

const GET_ALL_USERS = 'GET_ALL_USERS'
const GET_USER = 'GET_USER'

// Initial State
const initialState = {users: [], user: {}}
/******************************************** */
// ACTION CREATOR
const getAllUsers = users => ({type: GET_ALL_USERS, users})
const getUser = user => ({type: GET_USER, user})
/******************************************** */
// THUNK CREATOR
export const fetchAllUsers = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users')
    dispatch(getAllUsers(data))
  } catch (error) {
    console.error(error)
  }
}
export const fetchSingleUser = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/users/${userId}`)
    dispatch(getUser(data))
  } catch (error) {
    console.error(error)
  }
}
/******************************************** */
// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users
    case GET_USER:
      return {...state, user: action.user}
    default:
      return state
  }
}
