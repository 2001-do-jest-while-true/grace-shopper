import React from 'react'
import {connect} from 'react-redux'
import {
  fetchSingleProduct,
  deleteProductThunk,
  addToCartThunk,
  addToCart
} from '../store'
import EditProduct from './editProduct'
import Dinero from 'dinero.js'

class SingleProduct extends React.Component {
  constructor() {
    super()
    this.state = {edit: false}
    this.handleAdd = this.handleAdd.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.productId)
  }

  handleAdd() {
    const productId = this.props.match.params.productId

    if (this.props.isLoggedIn) {
      this.props.addToCartThunk(this.props.orderId, {
        [productId]: 1
      })
    } else {
      this.props.addToCart({[productId]: 1})
    }
  }

  toggleEdit = () => {
    return !this.state.edit
  }

  render() {
    if (this.props.singleProduct.id) {
      const product = this.props.singleProduct
      return (
        <div>
          {!this.state.edit ? (
            <div className="single-product-main">
              <div className="single-product-pane">
                <img src={product.imageUrl} />
                <div className="single-product-info">
                  <h2>{product.name}</h2>
                  <p>
                    Price: {Dinero({amount: product.price}).toFormat('$0.00')}
                  </p>
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
                  <button
                    type="button"
                    className="cart-button"
                    onClick={this.handleAdd}
                  >
                    Add to Cart
                  </button>
                  {this.props.isAdmin && (
                    <div>
                      <button
                        type="button"
                        onClick={() => this.setState({edit: this.toggleEdit()})}
                      >
                        {' '}
                        Edit Product
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          this.props.deleteProductThunk(product.id)
                        }
                      >
                        {' '}
                        Delete Product
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="single-product-description">
                {product.description}
              </div>
            </div>
          ) : (
            <EditProduct singleProduct={this.props.singleProduct} />
          )}
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.id,
  isAdmin: state.user.isAdmin,
  singleProduct: state.product,
  orderId: state.cart.orderId
})

const mapDispatchToProps = dispatch => ({
  fetchSingleProduct: id => dispatch(fetchSingleProduct(id)),
  deleteProductThunk: id => dispatch(deleteProductThunk(id)),
  addToCart: item => dispatch(addToCart(item)),
  addToCartThunk: (orderId, item) => dispatch(addToCartThunk(orderId, item))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
