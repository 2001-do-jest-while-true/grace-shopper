import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_LOGGED_IN = 'GET_LOGGED_IN'
const LOG_OUT = 'LOG_OUT'
const ADD_USER = 'ADD_USER'

/**
 * INITIAL STATE
 */

const initialState = {}

/**
 * ACTION CREATORS
 */
const getLoggedIn = user => ({type: GET_LOGGED_IN, user})
const logOutUser = () => ({type: LOG_OUT, user: {}})
const addUser = user => ({type: ADD_USER, user})
/**
 * THUNK CREATORS
 */

export const addUserThunk = user => async dispatch => {
  try {
    const {data} = await axios.post('/api/users/signup', user)

    dispatch(addUser(data))
  } catch (error) {
    console.error(error)
  }
}

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getLoggedIn(res.data || {}))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (userparam, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {userparam, password})
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
    case GET_LOGGED_IN:
      return action.user
    case LOG_OUT:
      return action.user
    case ADD_USER:
      return action.user
    default:
      return state
  }
}
