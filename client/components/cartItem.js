import React from 'react'
import {connect} from 'react-redux'
import {
  deleteFromCart,
  deleteFromCartThunk,
  changeCartQuantity,
  updateQtyThunk
} from '../store'
import Dinero from 'dinero.js'
import Loader from 'react-loader-spinner'

class CartItem extends React.Component {
  constructor() {
    super()
    this.state = {
      cartQuantity: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleQuantitySubmit = this.handleQuantitySubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  async componentDidMount() {
    await this.setState({
      cartQuantity: this.props.cart[this.props.product.id]
    })
    this.props.addToOrderTotal(
      this.props.product.price * this.state.cartQuantity
    )
  }

  handleChange() {
    this.setState({
      cartQuantity: event.target.value
    })
  }

  handleQuantitySubmit() {
    if (!+this.state.cartQuantity) this.handleDelete()
    else {
      this.handleUpdate()
    }
  }

  handleUpdate() {
    const prodId = this.props.product.id
    const cartQty = this.state.cartQuantity

    if (this.props.isLoggedIn) {
      const product = {
        productId: prodId,
        quantity: +cartQty
      }
      this.props.updateQtyThunk(
        this.props.loggedIn.id,
        this.props.orderId,
        product
      )
    } else {
      this.props.changeCartQuantity(prodId, +cartQty)
    }

    const quantityDifference = this.props.cart[prodId] - +cartQty
    this.props.addToOrderTotal(-quantityDifference * this.props.product.price)
  }

  handleDelete() {
    const prodId = this.props.product.id

    if (this.props.isLoggedIn) {
      this.props.deleteFromCartThunk(
        this.props.loggedIn.id,
        this.props.orderId,
        prodId
      )
    } else {
      this.props.deleteFromCart(prodId)
    }
    this.props.addToOrderTotal(
      -(this.props.cart[prodId] * this.props.product.price)
    )
  }

  render() {
    const product = this.props.product
    if (product) {
      return (
        <div className="cart-item">
          <div className="cart-img-div">
            <img src={product.imageUrl} />
          </div>
          <div className="cart-col1">
            <h2>{product.name}</h2>
            <p>Price: {Dinero({amount: product.price}).toFormat('$0.00')}</p>
            <br />
            {product.quantity < 5 &&
              product.quantity > 0 && <span>Low on stock. Buy now!</span>}
            {product.quantity <= 0 && (
              <span>Out of stock. Check back soon!</span>
            )}
          </div>
          <div className="cart-col2">
            <label htmlFor="quantity">Quantity: </label>
            <input
              type="number"
              name="quantity"
              min={0}
              value={this.state.cartQuantity}
              onChange={this.handleChange}
            />
            <button type="button" onClick={this.handleQuantitySubmit}>
              Update Quantity
            </button>

            <button type="button" onClick={this.handleDelete}>
              Remove Item
            </button>
          </div>
        </div>
      )
    } else {
      return <Loader type="ThreeDots" color="Cyan" width={80} height={80} />
    }
  }
}

const mapState = state => ({
  isLoggedIn: !!state.user.id,
  loggedIn: state.user,
  products: state.product.allProducts,
  orderId: state.cart.orderId,
  cart: state.cart.cart
})

const mapDispatch = dispatch => ({
  deleteFromCart: productId => dispatch(deleteFromCart(productId)),

  deleteFromCartThunk: (userId, orderId, productId) =>
    dispatch(deleteFromCartThunk(userId, orderId, productId)),

  changeCartQuantity: (productId, quantity) =>
    dispatch(changeCartQuantity(productId, quantity)),

  updateQtyThunk: (userId, orderId, product) =>
    dispatch(updateQtyThunk(userId, orderId, product))
})

export default connect(mapState, mapDispatch)(CartItem)
