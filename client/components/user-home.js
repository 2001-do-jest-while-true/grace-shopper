import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllProducts from './allProducts'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  return (
    <div>
      <div>
        <h3>Welcome, {email}</h3>
      </div>
      <div>
        <AllProducts />
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.loggedIn.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
