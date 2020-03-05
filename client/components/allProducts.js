import React from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store'
import Loader from 'react-loader-spinner'
//import {Link} from 'react-router-dom'
import ProductBox from './productBox'
//ADD FILTERS HERE FOR FILTERING ACCORDING TO FILTER TYPE

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts()
  }

  render() {
    let products = this.props.products
    const location = this.props.location
    if (location) {
      const type = location.search.split('=')[1]
      products = products.filter(product => product.type === type)
    }

    return (
      <div>
        {this.props.products.length ? (
          products.map(product => (
            <div key={product.id}>
              <ProductBox product={product} />}
            </div>
          ))
        ) : (
          <p> No products yet...</p>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.allProducts,
  orderId: state.cart.orderId,
  cart: state.cart.cart
})

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
