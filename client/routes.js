import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import AllProducts from './components/allProducts'
import SingleProduct from './components/singleProduct'
import allUsers from './components/allUsers'
import Cart from './components/cart'
import SingleUser from './components/singleUser'
import AddProduct from './components/addProduct'
import EditProduct from './components/editProduct'
import AdminUser from './components/adminUser'
import UserSignup from './components/UserSignup'
import OrderConfirmation from './components/orderConfirmation'
import {me} from './store'
import UserHome from './components/user-home'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    const {isLoggedIn, isAdmin} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/signup" component={UserSignup} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/products/:productId" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/cart/checkout" component={OrderConfirmation} />
        {/* <Route exact path="/users" component={allUsers} />
        <Route path="/users/:userId" component={SingleUser} /> */}

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
    isAdmin: state.user.isAdmin
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
