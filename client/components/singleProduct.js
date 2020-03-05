import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store'
//ADDED IN STOCK --TOTALLY OPTIONAL

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.productId)
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
  singleProduct: state.product.singleProduct
})

const mapDispatchToProps = dispatch => ({
  fetchSingleProduct: id => dispatch(fetchSingleProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
