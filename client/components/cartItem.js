import React from 'react'
import {connect} from 'react-redux'
import {deleteFromCart} from '../store'

class CartItem extends React.Component {
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
          <input type="number" name="quantity" min={0} />

          <button
            type="button"
            onClick={() => this.props.deleteFromCart(product.id)}
          >
            Remove Item
          </button>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.product.allProducts,
  cart: state.cart.cart
})

const mapDispatch = dispatch => ({
  deleteFromCart: productId => dispatch(deleteFromCart(productId))
})

export default connect(mapState, mapDispatch)(CartItem)
