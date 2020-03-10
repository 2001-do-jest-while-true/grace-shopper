import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, deleteCart, fetchCart} from '../store'
import Navbar from './navbar'
import {Login} from './auth-form'

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
            <img src="duck.png" />
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
          <Link to="/signup">Sign up</Link>
          <Link to="/cart">
            <img src="cart.svg" />
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

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
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

// {/* <div>
// <h1>What The Duck</h1>
// <nav>
//   {isLoggedIn ? (
//     <div>
//       {/* The navbar will show these links after you log in */}
//       <Link to="/home">Home</Link>
//       <a href="#" onClick={handleClick}>
//         Logout
//       </a>
//     </div>
//   ) : (
//     <div>
//       {/* The navbar will show these links before you log in */}
//       <Link to="/login">Login</Link>
//       <Link to="/signup">Sign Up</Link>
//     </div>
//   )}
// </nav>
// <hr />
// </div>
// ) */}
