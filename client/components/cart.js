import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CartItem from './cartItem'
import {storeCart} from '../store'
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
    if (Object.keys(this.props.cart).length && this.props.allProducts.length) {
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
            Total: {Dinero({amount: this.state.orderTotal}).toFormat('$0.00')}
            <button type="button" onClick={this.handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )
    } else {
      return <div>No items here...</div>
    }
  }
}

const mapState = state => ({
  allProducts: state.allProducts,
  cart: state.cart.cart,
  orderId: state.cart.orderId
})

const mapDispatch = dispatch => ({
  storeCart: cart => dispatch(storeCart(cart))
})

export default connect(mapState, mapDispatch)(Cart)
