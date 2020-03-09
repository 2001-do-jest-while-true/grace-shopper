import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToCart, deleteProductThunk, addToCartThunk} from '../store'
import Dinero from 'dinero.js'

class ProductBox extends React.Component {
  constructor() {
    super()
    this.state = {
      orderQuantity: 1,
      deleted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleDelete() {
    this.setState({deleted: true})
    this.props.deleteProductThunk(this.props.product.id)
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
        [productId]: +this.state.orderQuantity
      })
    } else {
      this.props.addToCart({[productId]: +this.state.orderQuantity})
    }
  }

  render() {
    const {id, name, price, quantity, imageUrl} = this.props.product
    return (
      <div>
        {!this.state.deleted && (
          <div className="product-box-container">
            <div className="product-box-image-div">
              <img src={imageUrl} />
            </div>
            <div className="product-box-info">
              <Link to={`/products/${id}`}>
                <h2>{name}</h2>
              </Link>
              <div className="inventory-box">
                <p>Price: {Dinero({amount: price}).toFormat('$0.00')}</p>
                {quantity === 0 && (
                  <span className="warning">
                    Out of stock, check back soon!
                  </span>
                )}
                {quantity < 6 && (
                  <span className="warning">
                    Out of stock, check back soon!
                  </span>
                )}
                {quantity > 6 && <span className="in-stock"> In stock</span>}
              </div>
              <div className="select-qty-add-to-cart">
                <label htmlFor="qty">Qty: </label>
                <select
                  value={this.state.orderQuantity}
                  name="quantity"
                  className="select-item-quantity"
                  onChange={this.handleChange}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <button
                  className="add-to-cart"
                  type="button"
                  onClick={() => this.handleAdd(id)}
                >
                  Add to cart
                </button>
                {this.props.isAdmin && (
                  <button type="button" onClick={this.handleDelete}>
                    Delete Product
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  cart: state.cart,
  isAdmin: state.user.isAdmin,
  isLoggedIn: !!state.user.id,
  orderId: state.cart.orderId
})

const mapDispatch = dispatch => ({
  addToCart: (id, quantity) => dispatch(addToCart(id, quantity)),
  deleteProductThunk: id => dispatch(deleteProductThunk(id)),
  addToCartThunk: (orderId, product) =>
    dispatch(addToCartThunk(orderId, product))
})

export default connect(mapState, mapDispatch)(ProductBox)
