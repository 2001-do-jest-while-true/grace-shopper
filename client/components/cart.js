import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store'

class Cart extends React.Component {
  componentDidMount() {
    this.props.fetchCart(this.props.orderId)
  }
  render() {
    return <div>{this.props.cart && <div> Cart loaded </div>}</div>
  }
}

const mapState = state => ({
  cart: state.cart.cart,
  orderId: state.cart.orderId
})

const mapDispatch = dispatch => ({
  fetchCart: orderId => dispatch(fetchCart(orderId))
})

export default connect(mapState, mapDispatch)(Cart)
