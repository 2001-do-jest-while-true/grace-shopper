import React from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/product'
import singleProduct from './singleProduct'

class AllProducts extends React.Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    this.props.fetchAllProducts()
  }

  render() {
    return (
      <div>
        {this.props.products.length ? (
          this.props.products.map(product => (
            <div key={product.id}>
              <SingleProduct />{' '}
            </div>
          ))
        ) : (
          <p>empty products</p>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
