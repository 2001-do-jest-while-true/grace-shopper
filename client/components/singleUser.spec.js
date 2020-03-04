/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SingleUser} from './singleUser'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('SingleUser', () => {
  let singleUser
  const fakeUser = {username: 'Cody', email: 'cody@email.com', isAdmin: true}

  beforeEach(() => {
    singleUser = shallow(<SingleUser singleUser={fakeUser} />)
  })

  it('renders the username in a p', () => {
    expect(singleUser.find('p').text()).to.be.equal('Cody')
  })
})
