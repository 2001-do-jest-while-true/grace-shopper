import React from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/product'
import {Link} from 'react-router-dom'
import Filters from './filters'

//ADD FILTERS HERE FOR FILTERING ACCORDING TO FILTER TYPE

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
          products.map(product => {
            if (this.state.filters.includes(product.category)) {
              return (
                <div key={product.id}>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>

                  <p>{product.price}</p>
                </div>
              )
            }
          })
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
