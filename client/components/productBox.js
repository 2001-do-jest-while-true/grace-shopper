import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {me, addToCartThunk} from '../store'

class ProductBox extends React.Component {
  componentDidMount() {
    this.props.fetchLoggedUser()
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
              <p>{price}</p>
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
              <select name="quantity" id="select-item-quantity">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <button
                id="add-to-cart"
                type="button"
                onClick={() => this.props.addToCart(id, this.props.userId)}
              >
                {' '}
                Add to cart{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  userId: state.user.loggedIn.id
})

const mapDispatch = dispatch => ({
  fetchLoggedUser: () => dispatch(me()),
  addToCart: (id, userId) => dispatch(addToCartThunk(id, userId))
})

export default connect(mapState, mapDispatch)(ProductBox)
