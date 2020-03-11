import React from 'react'
import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'
import CartItem from './cartItem'

import {
  storeCart,
  fetchCart,
  initializeCartThunk,
  addToCartThunk,
  me
} from '../store'

import Dinero from 'dinero.js'

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      orderTotal: 0
    }
    this.addToOrderTotal = this.addToOrderTotal.bind(this)
    this.handleCheckout = this.handleCheckout.bind(this)
  }

  async componentDidMount() {
    //this.props.fetchCart(this.props.orderId)
    const merged = JSON.parse(window.localStorage.getItem('merged'))
    await this.props.loadInitialData()
    await this.props.initializeCartThunk(this.props.loggedIn.id)

    if (+this.props.loggedIn.id && !merged) {
      const localCart = JSON.parse(window.localStorage.getItem('cart'))
      await this.props.addToCartThunk(this.props.orderId, localCart)

      window.localStorage.setItem('cart', JSON.stringify({}))
      window.localStorage.setItem('merged', true)
    }

    if (this.props.loggedIn.id) await this.props.fetchCart(this.props.orderId)
  }

  addToOrderTotal(amount) {
    const newTotal = this.state.orderTotal + amount
    this.setState({
      orderTotal: newTotal
    })
  }

  handleCheckout() {
    this.props.storeCart({
      orderId: this.props.orderId,
      cart: this.props.cart
    })

    this.props.history.push(`/cart/checkout?order=${this.props.orderId}`)
  }

  render() {
    const merged = JSON.parse(window.localStorage.getItem('merged'))

    if ((+this.props.loggedIn.id && merged) || !this.props.loggedIn.id) {
      if (
        Object.keys(this.props.cart).length &&
        this.props.allProducts.length
      ) {
        return (
          <div id="cart-container">
            <div id="cart-items-div">
              {Object.keys(this.props.cart).map(prodId => (
                <CartItem
                  key={prodId}
                  product={this.props.allProducts.find(
                    item => item.id === +prodId
                  )}
                  addToOrderTotal={this.addToOrderTotal}
                />
              ))}
            </div>
            <div id="order-total-div">
              <h2>Order Information:</h2>
              <p>
                Total:{' '}
                {Dinero({amount: this.state.orderTotal}).toFormat('$0.00')}
              </p>
              <button
                id="checkout-btn"
                type="button"
                onClick={this.handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )
      } else {
        return <div>No items here...</div>
      }
    } else {
      return (
        <div>
          Loading... If loading for more than 5 seconds, please click refresh.
        </div>
      )
    }
  }
}

const mapState = state => ({
  loggedIn: state.user,
  allProducts: state.allProducts,
  cart: state.cart.cart,
  orderId: state.cart.orderId
})

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me()),
  storeCart: cart => dispatch(storeCart(cart)),
  fetchCart: orderId => dispatch(fetchCart(orderId)),
  initializeCartThunk: userId => dispatch(initializeCartThunk(userId)),
  addToCartThunk: (orderId, cart) => dispatch(addToCartThunk(orderId, cart))
})

export default connect(mapState, mapDispatch)(Cart)
