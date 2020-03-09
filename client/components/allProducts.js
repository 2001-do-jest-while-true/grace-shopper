import React from 'react'
import {connect} from 'react-redux'
import ProductBox from './productBox'
import Filters from './filters'
import {AddProduct} from './updateProduct'
import {fetchAllProducts} from '../store'

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
      ],
      displayAddProd: false
    }
    this.setFilters = this.setFilters.bind(this)
    this.toggleDisplayAddProd = this.toggleDisplayAddProd.bind(this)
  }

  setFilters(array) {
    this.setState({
      filters: [...array]
    })
  }

  toggleDisplayAddProd() {
    const newState = !this.state.displayAddProd
    this.setState({displayAddProd: newState})
  }

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
        {this.props.isAdmin && (
          <button type="button" onClick={this.toggleDisplayAddProd}>
            Add Product
          </button>
        )}
        {this.state.displayAddProd ? (
          <AddProduct resetDisplay={this.toggleDisplayAddProd} />
        ) : (
          <Filters filters={this.state.filters} setFilters={this.setFilters} />
        )}
        {!this.state.displayAddProd && this.props.products.length
          ? products.map(product => {
              if (this.state.filters.includes(product.category)) {
                return (
                  <div key={product.id}>
                    <ProductBox product={product} />
                  </div>
                )
              }
            })
          : !this.state.displayAddProd && <p>empty products</p>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAdmin: state.user.isAdmin,
  products: state.allProducts,
  orderId: state.cart.orderId,
  cart: state.cart.cart
})

const mapDispatch = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts())
})
export default connect(mapStateToProps, mapDispatch)(AllProducts)
