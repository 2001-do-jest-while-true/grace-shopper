import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToCart, deleteProductThunk} from '../store'

class ProductBox extends React.Component {
  constructor() {
    super()
    this.state = {
      orderQuantity: 1,
      deleted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.setState({deleted: true})
    this.props.deleteProductThunk(this.props.product.id)
  }

  handleChange() {
    this.setState({
      orderQuantity: event.target.value
    })
  }

  render() {
    const {id, name, price, quantity, imageUrl} = this.props.product
    return (
      <div>
        {!this.state.deleted && (
          <div id="product-box-container">
            <img src={imageUrl} />
            <div id="product-box-info">
              <Link to={`/products/${id}`}>{name}</Link>
              <div id="inventory-box">
                <p>Price: {price / 100}</p>
                {quantity === 0 && (
                  <span className="warning">
                    Out of stock, check back soon!
                  </span>
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
                  onClick={() =>
                    this.props.addToCart(id, Number(this.state.orderQuantity))
                  }
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
  isAdmin: state.user.loggedIn.isAdmin
})

const mapDispatch = dispatch => ({
  addToCart: (id, quantity) => dispatch(addToCart(id, quantity)),
  deleteProductThunk: id => dispatch(deleteProductThunk(id))
})

export default connect(mapState, mapDispatch)(ProductBox)
