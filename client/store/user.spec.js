/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {me, logout, getAllUsers, getUser} from './user'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {
    loggedIn: {},
    users: [],
    singleUser: {}
  }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('me', () => {
    it('eventually dispatches the GET_LOGGED_IN action', async () => {
      const fakeLoggedIn = {email: 'Cody'}
      mockAxios.onGet('/auth/me').replyOnce(200, fakeLoggedIn)
      await store.dispatch(me())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_LOGGED_IN')
      expect(actions[0].user).to.be.deep.equal(fakeLoggedIn)
    })
  })

  describe('logout', () => {
    it('logout: eventually dispatches the LOG_OUT action', async () => {
      mockAxios.onPost('/auth/logout').replyOnce(204)
      await store.dispatch(logout())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('LOG_OUT')
      expect(history.location.pathname).to.be.equal('/login')
    })
  })

  describe('fetchAllUsers', () => {
    it('eventually dispatches the GET_ALL_USERS action', async () => {
      const fakeUsers = [{email: 'Cody'}, {email: 'Lauren'}, {email: 'Patty'}]
      mockAxios.onGet('/api/products').replyOnce(200, fakeUsers)
      await store.dispatch(getAllUsers())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_ALL_USERS')
      expect(actions[0].users).to.be.deep.equal(fakeUsers)
    })
  })

  describe('fetchSingleUser', () => {
    it('eventually dispatches the GET_USER action', async () => {
      const fakeSingleUser = {email: 'Cody'}
      mockAxios.onGet('/api/users/1').replyOnce(200, fakeSingleUser)
      await store.dispatch(getUser())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_USER')
      expect(actions[0].user).to.be.deep.equal(fakeSingleUser)
    })
  })
})
