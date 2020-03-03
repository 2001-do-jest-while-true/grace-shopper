import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store'

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.productId)
  }

  render() {
    if (this.props.singleProduct) {
      const product = this.props.singleProduct
      return (
        <div className="single-product-main">
          <div className="single-product-pane">
            <img src={product.imageUrl} />
            <div className="single-product-info">
              <h2>{product.name}</h2>
              <p>Price: {product.price}</p>
              <p>
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
            </div>
          </div>
          <div className="single-product-description" />
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = state => ({
  singleProduct: state.product.singleProduct
})

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => dispatch(fetchSingleProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
