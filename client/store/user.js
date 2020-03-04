import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_LOGGED_IN = 'GET_LOGGED_IN'
const GET_USER = 'GET_USER'
const GET_ALL_USERS = 'GET_ALL_USERS'
const LOG_OUT = 'LOG_OUT'

/**
 * INITIAL STATE
 */

const initialState = {
  // split this up as well please :)
  loggedIn: {},
  users: [],
  singleUser: {}
}

/**
 * ACTION CREATORS
 */
const getLoggedIn = user => ({type: GET_LOGGED_IN, user})
const logOutUser = () => ({type: LOG_OUT})
const getUser = user => ({type: GET_USER, user})
const getAllUsers = users => ({
  type: GET_ALL_USERS,
  users
})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getLoggedIn(res.data || {}))
  } catch (err) {
    console.error(err)
  }
}

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

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getLoggedIn({error: authError}))
  }

  try {
    dispatch(getLoggedIn(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(logOutUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {...state, users: action.users}
    case GET_LOGGED_IN:
      return {...state, loggedIn: action.user}
    case GET_USER:
      return {...state, singleUser: action.user}
    case LOG_OUT:
      return {...state, loggedIn: {}}
    default:
      return state
  }
}
