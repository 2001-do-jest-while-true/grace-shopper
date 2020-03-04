import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Navbar from './navbar'
import {Login} from './auth-form'

const Header = props => {
  return (
    <div id="header">
      <div id="header-top">
        <div id="logo-div">
          <h1>What the Duck</h1>
        </div>
        <div id="header-buttons">
          {props.isLoggedIn ? (
            <button type="button" onClick={props.handleClick}>
              Log Out
            </button>
          ) : (
            <button type="button" onClick={props.loginClickHandler}>
              Log In
            </button>
          )}
          <button type="button">Sign Up</button>
          <img src="cart.svg" />
        </div>
      </div>
      <div id="header-bottom">
        <Navbar />
      </div>
      {props.login &&
        !props.isLoggedIn && (
          <Login loginClickHandler={props.loginClickHandler} />
        )}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.loggedIn.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Header)

/**
 * PROP TYPES
 */
Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
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
