import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store'
import CartItem from './cartItem'
import Dinero from 'dinero.js'

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      orderTotal: 0
    }

    this.addToOrderTotal = this.addToOrderTotal.bind(this)
  }

  addToOrderTotal(amount) {
    const newTotal = this.state.orderTotal + amount
    this.setState({
      orderTotal: newTotal
    })
  }

  render() {
    return (
      <div>
        <div id="cart-div">
          {Object.keys(this.props.cart).map(prodId => (
            <CartItem
              key={prodId}
              product={this.props.allProducts.find(item => item.id === +prodId)}
              addToOrderTotal={this.addToOrderTotal}
            />
          ))}
        </div>
        <div id="order-total-div">
          Total: {Dinero({amount: this.state.orderTotal}).toFormat('$0.00')}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  allProducts: state.allProducts,
  cart: state.cart.cart,
  orderId: state.cart.orderId
})

export default connect(mapState)(Cart)
