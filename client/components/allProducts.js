import React from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/product'
import {Link} from 'react-router-dom'

//ADD FILTERS HERE FOR FILTERING ACCORDING TO FILTER TYPE

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts()
  }

  render() {
    let products = this.props.products
    const location = this.props.location
    console.log('this is the location in All products', location)
    if (location) {
      const type = location.search.split('=')[1]
      products = products.filter(product => product.type === type)
    }

    return (
      <div>
        {this.props.products.length ? (
          products.map(product => (
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
