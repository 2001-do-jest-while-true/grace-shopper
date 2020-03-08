import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToCart, addToCartThunk} from '../store'
//addToCartThunk
class ProductBox extends React.Component {
  constructor() {
    super()
    this.state = {
      orderQuantity: 1
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange() {
    this.setState({
      orderQuantity: event.target.value
    })
  }

  handleAdd(productId) {
    if (this.props.isLoggedIn) {
      this.props.addToCartThunk(this.props.orderId, {
        productId,
        quantity: +this.state.orderQuantity
      })
    } else {
      this.props.addToCart(productId, +this.state.orderQuantity)
    }
  }

  render() {
    const {id, name, price, quantity, imageUrl} = this.props.product
    return (
      <div>
        <div id="product-box-container">
          <img src={imageUrl} />
          <div id="product-box-info">
            <Link to={`/products/${id}`}>
              <h2>{name}</h2>
            </Link>
            <div id="inventory-box">
              <p>Price: {price / 100}</p>
              {quantity === 0 && (
                <span className="warning">Out of stock, check back soon!</span>
              )}
              {quantity < 6 && (
                <span className="warning"> Running low, buy soon!</span>
              )}
              {quantity > 6 && <span className="in-stock"> In stock</span>}
            </div>
            <div id="select-qty-add-to-cart">
              <label htmlFor="qty">Qty: </label>
              <select
                value={this.state.orderQuantity}
                name="quantity"
                id="select-item-quantity"
                onChange={this.handleChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <button
                id="add-to-cart"
                type="button"
                onClick={() => this.handleAdd(id)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//onClick={() => this.props.addToCart(id, this.props.userId)}
const mapState = state => ({
  isLoggedIn: !!state.user.id,
  orderId: state.cart.orderId
})

const mapDispatch = dispatch => ({
  addToCart: (id, quantity) => dispatch(addToCart(id, quantity)),
  addToCartThunk: (orderId, product) =>
    dispatch(addToCartThunk(orderId, product))
})

export default connect(mapState, mapDispatch)(ProductBox)
