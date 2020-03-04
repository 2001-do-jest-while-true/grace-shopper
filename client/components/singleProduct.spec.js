/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SingleProduct} from './singleProduct'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('SingleProduct', () => {
  let singleProduct
  let fakeProduct = {
    name: 'Flextape',
    price: 10.99,
    quantity: 10,
    description: 'Can fix a boat that has been cut in half'
  }

  beforeEach(() => {
    singleProduct = shallow(<SingleProduct singleProduct={fakeProduct} />)
  })

  it('renders the name in an h2', () => {
    expect(singleProduct.find('h2').text()).to.be.equal('Flextape')
  })

  it('has an Add to Cart button', () => {
    expect(singleProduct.find('button').text()).to.be.equal('Add to Cart')
  })
})
