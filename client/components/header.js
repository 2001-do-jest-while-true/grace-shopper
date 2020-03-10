import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, deleteCart, fetchCart} from '../store'
import Navbar from './navbar'
import {Login} from './auth-form'
import {useHistory} from 'react-router-dom'

const Header = props => {
  const handleLogin = async () => {
    window.localStorage.setItem('merged', false)
    await props.loginClickHandler()
  }

  return (
    <div id="header">
      <div id="header-top">
        <div id="logo-div">
          <Link to="/home">
            <img src="/duck.png" />
          </Link>
        </div>
        <div id="header-buttons">
          {props.isLoggedIn ? (
            <button type="button" onClick={props.handleLogout}>
              Log Out
            </button>
          ) : (
            <button type="button" onClick={props.loginClickHandler}>
              Log In
            </button>
          )}
          {!props.isLoggedIn ? (
            <SignupButton />
          ) : (
            <div id="dropdown-container">
              <button type="button" id="dropdown-btn">
                {' '}
                Account ▾{' '}
              </button>
              <div id="dropdown-content">
                <a href={`/orders/${props.userId}/past-orders`}>
                  Order History
                </a>
                <a href={`/${props.userId}/account`}>Account</a>
              </div>
            </div>
          )}
          <Link to="/cart">
            <img src="/cart.svg" />
          </Link>
        </div>
      </div>
      <div id="header-bottom">
        <Navbar />
      </div>
      {props.login &&
        !props.isLoggedIn && <Login loginClickHandler={() => handleLogin()} />}
    </div>
  )
}

// A small functional component that directs the user to the signup page
const SignupButton = () => {
  const history = useHistory()

  const handleSignup = () => history.push('/signup')

  return (
    <button type="button" onClick={handleSignup}>
      Sign up
    </button>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    userId: state.user.id,
    orderId: state.cart.orderId
  }
}

const mapDispatch = dispatch => {
  return {
    async deleteCart() {
      await dispatch(deleteCart())
    },

    async handleLogout() {
      await dispatch(deleteCart())
      await dispatch(logout())

      window.localStorage.setItem('cart', JSON.stringify({}))
      window.localStorage.setItem('merged', false)
    },

    fetchCart: orderId => dispatch(fetchCart(orderId))
  }
}

export default connect(mapState, mapDispatch)(Header)

/**
 * PROP TYPES
 */
Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
