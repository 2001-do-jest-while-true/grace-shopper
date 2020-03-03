import React from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/product'
import {Link} from 'react-router-dom'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts()
  }

  render() {
    return (
      <div>
        {this.props.products.length ? (
          this.props.products.map(product => (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>

              <p>{product.price}</p>
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
  products: state.product.products
})

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
