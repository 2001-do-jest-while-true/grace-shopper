import React from 'react'
import {connect} from 'react-redux'
import {
  deleteFromCart,
  deleteFromCartThunk,
  changeCartQuantity,
  updateQtyThunk
} from '../store'

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

  componentDidMount() {
    this.setState({
      cartQuantity: this.props.cart[this.props.product.id]
    })
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
    if (this.props.isLoggedIn) {
      const product = {
        productId: this.props.product.id,
        quantity: +this.state.cartQuantity
      }
      this.props.updateQtyThunk(this.props.orderId, product)
    } else {
      this.props.changeCartQuantity(
        this.props.product.id,
        +this.state.cartQuantity
      )
    }
  }

  handleDelete() {
    if (this.props.isLoggedIn) {
      this.props.deleteFromCartThunk(this.props.orderId, this.props.product.id)
    } else {
      this.props.deleteFromCart(this.props.product.id)
    }
  }

  render() {
    const product = this.props.product
    return (
      <div className="cart-item">
        <div className="cart-img-div">
          <img src={product.imageUrl} />
        </div>
        <div className="cart-col1">
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <br />
          {product.quantity < 5 &&
            product.quantity > 0 && <span>Low on stock. Buy now!</span>}
          {product.quantity <= 0 && <span>Out of stock. Check back soon!</span>}
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
  }
}

const mapState = state => ({
  isLoggedIn: !!state.user.loggedIn.id,
  products: state.product.allProducts,
  orderId: state.cart.orderId,
  cart: state.cart.cart
})

const mapDispatch = dispatch => ({
  deleteFromCart: productId => dispatch(deleteFromCart(productId)),

  deleteFromCartThunk: (orderId, productId) =>
    dispatch(deleteFromCartThunk(orderId, productId)),

  changeCartQuantity: (productId, quantity) =>
    dispatch(changeCartQuantity(productId, quantity)),

  updateQtyThunk: (orderId, product) =>
    dispatch(updateQtyThunk(orderId, product))
})

export default connect(mapState, mapDispatch)(CartItem)
