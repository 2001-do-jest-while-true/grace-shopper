import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AllProducts from './allProducts'

const adapter = new Adapter()
enzyme.configure({adapter})

describe.only('AllProducts', () => {
  let allProducts

  beforeEach(() => {
    allProducts = shallow(
      <AllProducts name="Gucci Hat" price="300.00" id="3" />
    )

    it('renders the product name in Link', () => {
      expect(
        allProducts
          .find('Link')
          .text()
          .to.be.equal('Gucci Hat')
      )
      expect(
        allProducts
          .find('p')
          .text()
          .to.be.equal('300.00')
      )
      expect(
        allProducts
          .include('3')
          .text()
          .to.be.equal('3')
      )
    })
  })
})
