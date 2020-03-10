import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct, addToCartThunk, addToCart} from '../store'
import {EditProduct} from './updateProduct'

class SingleProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      displayEdit: false,
      addQty: 1
    }
    this.toggleDisplayEdit = this.toggleDisplayEdit.bind(this)
    this.handleQty = this.handleQty.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  toggleDisplayEdit() {
    const newState = !this.state.displayEdit
    this.setState({displayEdit: newState})
  }

  handleQty() {
    this.setState({
      addQty: +event.target.value
    })
  }

  handleAdd(productId) {
    if (this.props.isLoggedIn) {
      this.props.addToCartThunk(this.props.loggedIn.id, this.props.orderId, {
        [productId]: +this.state.addQty
      })
    } else {
      this.props.addToCart({[productId]: +this.state.addQty})
    }
  }

  componentDidMount() {
    const productId = this.props.match.params.productId
    this.props.fetchSingleProduct(productId)
  }
  render() {
    if (this.props.singleProduct) {
      const product = this.props.singleProduct
      return this.state.displayEdit ? (
        <EditProduct
          product={this.props.singleProduct}
          resetDisplay={this.toggleDisplayEdit}
        />
      ) : (
        <div className="single-product-main">
          <div className="single-product-pane">
            <img src={product.imageUrl} />
            <div className="single-product-info">
              <h2>{product.name}</h2>
              <p>Price:${product.price / 100}</p>
              <p>
                {product.quantity > 6 && (
                  <span className="in-stock">In stock</span>
                )}
                {product.quantity < 6 &&
                  product.quantity && (
                    <span className="warning">Low on stock. Buy soon!</span>
                  )}
                {!product.quantity && (
                  <span className="warning">
                    Out of stock. Check back soon!
                  </span>
                )}
              </p>
            </div>
            <div className="single-product-cart-div">
              <div className="add-to-cart-div">
                <h3>Purchase:</h3>
                <select
                  name="qty"
                  value={this.state.addQuantity}
                  onChange={this.handleQty}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>c
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <button
                  type="button"
                  className="cart-button"
                  onClick={() => this.handleAdd(product.id)}
                >
                  Add to Cart
                </button>
                {this.props.isAdmin && (
                  <div>
                    <button type="button" onClick={this.toggleDisplayEdit}>
                      Edit Product
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="single-product-description">
            <h2>Description</h2>
            {product.description}
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.id,
  loggedIn: state.user,
  isAdmin: state.user.isAdmin,
  singleProduct: state.product,
  orderId: state.cart.orderId
})

const mapDispatchToProps = dispatch => ({
  fetchSingleProduct: id => dispatch(fetchSingleProduct(id)),
  addToCartThunk: (userId, orderId, product) =>
    dispatch(addToCartThunk(userId, orderId, product)),
  addToCart: (id, quantity) => dispatch(addToCart(id, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
