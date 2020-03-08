import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {
  me,
  initializeCartThunk,
  fetchCart,
  setCart,
  fetchAllProducts
} from './store'
import AllProducts from './components/allProducts'
import SingleProduct from './components/singleProduct'
import allUsers from './components/allUsers'
import Cart from './components/cart'
import SingleUser from './components/singleUser'
import {AddProduct, EditProduct} from './components/updateProduct'
import AdminUser from './components/adminUser'
import UserSignup from './components/UserSignup'

let cartFlag = false

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.fetchAllProducts()

    const cartStr = window.localStorage.getItem('cart')
    console.log(cartStr)
    this.props.setCart(JSON.parse(cartStr))

    window.addEventListener('beforeunload', async event => {
      const orderId = this.props.orderId
      const cart = this.props.cart
      window.localStorage.setItem('orderId', String(orderId))
      window.localStorage.setItem('cart', JSON.stringify(cart))
    })
  }

  render() {
    const {isLoggedIn, isAdmin} = this.props

    if (this.props.loggedIn.id > 0 && !this.props.orderId) {
      this.props.initializeCartThunk(this.props.loggedIn.id)
      cartFlag = false
    }

    if (this.props.orderId && !this.props.cart && !cartFlag) {
      this.props.fetchCart(this.props.orderId)
      cartFlag = true
    }

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/signup" component={UserSignup} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/products/:productId" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home">{isAdmin ? <AdminUser /> : <UserHome />}</Route>
            <Route exact path="/users" component={allUsers} />
            <Route path="/users/:userId" component={SingleUser} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/add-product" component={AddProduct} />
            <Route
              path="/products/:productId/edit-product"
              render={props => <EditProduct {...props} />}
            />
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
  fetchAllProducts: () => dispatch(fetchAllProducts()),
  setCart: cartObj => dispatch(setCart(cartObj))
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
