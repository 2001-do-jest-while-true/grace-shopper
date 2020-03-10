import axios from 'axios'
import history from '../history'

const GET_ALL_USERS = 'GET_ALL_USERS'
const GET_USER = 'GET_USER'
const UPDATED_USER = 'UPDATED_USER'
const DELETED_USER = 'DELETED_USER'
// Initial State
const initialState = {users: [], user: {}}
/******************************************** */
// ACTION CREATOR
const getAllUsers = users => ({type: GET_ALL_USERS, users})
const getUser = user => ({type: GET_USER, user})
const updateUser = user => ({type: UPDATED_USER, user})
const deleteUser = id => ({type: DELETED_USER, id})
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

export const updateSingleUser = (userId, user) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/users/${userId}`, user)
    dispatch(updateUser(data))
  } catch (error) {
    console.error(error)
  }
}

export const deleteSingleUser = userId => async dispatch => {
  try {
    await axios.delete(`api/users/${userId}`)
    dispatch(deleteUser(userId))
  } catch (error) {
    console.error(error)
  }
}
/******************************************** */
// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {...state, users: action.users}
    case GET_USER:
      return {...state, user: action.user}
    case UPDATED_USER:
      return {...state, user: action.user}
    case DELETED_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      return state
  }
}
