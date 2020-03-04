import React from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/product'
import Loader from 'react-loader-spinner'
//import {Link} from 'react-router-dom'
import ProductBox from './ProductBox'
//ADD FILTERS HERE FOR FILTERING ACCORDING TO FILTER TYPE

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts()
  }

  render() {
    if (this.props.loading)
      return <Loader type="ThreeDots" color="Cyan" heigth={80} width={80} />
    return (
      <div>
        {this.props.products.length ? (
          this.props.products.map(product => (
            <div key={product.id}>
              <ProductBox product={product} />
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
  products: state.product.products,
  loading: state.product.loading
})

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
