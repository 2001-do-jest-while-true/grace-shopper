import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store'
import {EditProduct} from './updateProduct'

class SingleProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      displayEdit: false
    }
    this.toggleDisplayEdit = this.toggleDisplayEdit.bind(this)
  }

  toggleDisplayEdit() {
    const newState = !this.state.displayEdit
    this.setState({displayEdit: newState})
  }

  componentDidMount() {
    const productId = this.props.match.params.productId
    this.props.fetchSingleProduct(productId)
  }

  render() {
    console.log(this.props)
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
              <p>Price: {product.price / 100}</p>
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
              <button type="button" className="cart-button">
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
          <div className="single-product-description">
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
  isAdmin: state.user.loggedIn.isAdmin,
  singleProduct: state.product
})

const mapDispatchToProps = dispatch => ({
  fetchSingleProduct: id => dispatch(fetchSingleProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
