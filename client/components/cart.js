import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store'
import CartItem from './cartItem'

class Cart extends React.Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.cart).map(prodId => (
          <CartItem
            key={prodId}
            product={this.props.allProducts.find(item => item.id === +prodId)}
          />
        ))}
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
