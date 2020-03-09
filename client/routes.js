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
import AddProduct from './components/updateProduct'
import EditProduct from './components/updateProduct'
import OrderConfirmation from './components/orderConfirmation'
import {initializeCartThunk, fetchCart} from './store/cart'

let cartFlag = false
//IMPORT CART COMPONENT HERE
import AdminUser from './components/adminUser'
import UserSignup from './components/UserSignup'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.fetchAllProducts()
    window.addEventListener('beforeunload', async event => {
      const orderId = this.props.orderId
      const cart = this.props.cart
      // this.props.storeCart({orderId, cart})
      window.localStorage.setItem('orderId', String(orderId))
      window.localStorage.setItem('cart', cart)
    })
  }

  render() {
    const {isLoggedIn, isAdmin} = this.props

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
        <Route exact path="/signup" component={UserSignup} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/products/:productId" component={SingleProduct} />
        <Route
          exact
          path="/cart"
          render={() => <Cart orderId={this.props.orderId} />}
        />
        <Route path="/cart/checkout" component={OrderConfirmation} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            {/* <Route path="/home" component={UserHome} /> */}
            <Route path="/home">{isAdmin ? <AdminUser /> : <UserHome />}</Route>
            <Route exact path="/users" component={allUsers} />
            <Route path="/users/:userId" component={SingleUser} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/add-product" component={AddProduct} />
            <Route
              path="/products/:productId/edit-product"
              component={EditProduct}
            />
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
    isLoggedIn: !!state.user.id,
    cart: state.cart.cart,
    loggedIn: state.user,
    orderId: state.cart.orderId,
    isAdmin: state.user.isAdmin
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
