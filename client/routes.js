import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me, fetchAllProducts} from './store'
import AllProducts from './components/allProducts'
import SingleProduct from './components/singleProduct'
import allUsers from './components/allUsers'
import Cart from './components/cart'
import SingleUser from './components/singleUser'
import {initializeCartThunk, fetchCart} from './store/cart'

let cartFlag = false
//IMPORT CART COMPONENT HERE

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.fetchAllProducts()
  }

  render() {
    const {isLoggedIn} = this.props

    if (this.props.loggedIn.id > 0 && !this.props.orderId) {
      this.props.initializeCartThunk(this.props.loggedIn.id)
    }

    if (this.props.orderId && !cartFlag) {
      this.props.fetchCart(this.props.orderId)
      cartFlag = true
    }

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/products/:productId" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route exact path="/users" component={allUsers} />
          </Switch>
        )}
        <Route path="/">
          <AllProducts />
        </Route>
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.loggedIn.id,
    cart: state.cart.cart,
    loggedIn: state.user.loggedIn,
    orderId: state.cart.orderId
  }
}

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me()),
  initializeCartThunk: userId => dispatch(initializeCartThunk(userId)),
  fetchCart: orderId => dispatch(fetchCart(orderId)),
  fetchAllProducts: () => dispatch(fetchAllProducts())
})

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
