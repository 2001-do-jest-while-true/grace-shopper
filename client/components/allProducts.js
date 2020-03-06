import React from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store'
import Loader from 'react-loader-spinner'
//import {Link} from 'react-router-dom'
import ProductBox from './productBox'
import Filters from './filters'

class AllProducts extends React.Component {
  constructor() {
    super()
    this.state = {
      filters: [
        'business/casual',
        'halloween',
        'medieval',
        'gamer',
        'summer',
        'xmas',
        'misc'
      ]
    }

    this.setFilters = this.setFilters.bind(this)
  }

  componentDidMount() {
    this.props.fetchAllProducts()
  }

  setFilters(array) {
    this.setState({
      filters: [...array]
    })
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
        <Filters filters={this.state.filters} setFilters={this.setFilters} />
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
