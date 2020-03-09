import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, deleteCart} from '../store'
import Navbar from './navbar'
import {Login} from './auth-form'

const Header = props => {
  const handleLogin = () => {
    props.deleteCart()
    props.loginClickHandler()
  }

  return (
    <div id="header">
      <div id="header-top">
        <div id="logo-div">
          <h1>What the Duck</h1>
        </div>
        <div id="header-buttons">
          {props.isLoggedIn ? (
            <button type="button" onClick={props.handleLogout}>
              Log Out
            </button>
          ) : (
            <button type="button" onClick={handleLogin}>
              Log In
            </button>
          )}
          {!props.isLoggedIn ? (
            <button type="button">
              <Link to="/signup">Sign up</Link>
            </button>
          ) : (
            <div id="dropdown-container">
              <button type="button" id="dropdown-btn">
                {' '}
                Account ▾{' '}
              </button>
              <div id="dropdown-content">
                <a href={`/${props.userId}/past-orders`}>Order History</a>
                <a href={`/${props.userId}/account`}>Account</a>
              </div>
            </div>
          )}
          <Link to="/cart">
            <img src="cart.svg" />
          </Link>
        </div>
      </div>
      <div id="header-bottom">
        <Navbar />
      </div>
      {props.login &&
        !props.isLoggedIn && <Login loginClickHandler={handleLogin} />}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    async deleteCart() {
      await dispatch(deleteCart())
    },

    async handleLogout() {
      await dispatch(logout())
      await dispatch(deleteCart())
    }
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
