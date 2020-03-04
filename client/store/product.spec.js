/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {getAllProducts, fetchSingleProduct} from './product'
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
    products: [],
    singleProduct: {}
  }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchAllProducts', () => {
    it('eventually dispatches the GET_ALL_PROJECTS action', async () => {
      const fakeProducts = [
        {name: 'Flextape'},
        {name: 'Spaghetti'},
        {name: 'Ducks'}
      ]
      mockAxios.onGet('/api/products').replyOnce(200, fakeProducts)
      await store.dispatch(getAllProducts())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_ALL_PROJECTS')
      expect(actions[0].products).to.be.deep.equal(fakeProducts)
    })
  })

  describe('fetchSingleProduct', () => {
    it('eventually dispatches the GET_SINGLE_PRODUCT action', async () => {
      const fakeSingleProduct = {name: 'Golden duck'}
      mockAxios.onGet('/api/products/1').replyOnce(200, fakeSingleProduct)
      await store.dispatch(fetchSingleProduct())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_SINGLE_PRODUCT')
      expect(actions[0].product).to.be.deep.equal(fakeSingleProduct)
    })
  })
})
