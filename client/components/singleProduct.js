import React from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../store'

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getProduct(this.props.id)
  }

  render() {
    return <div />
  }
}

const mapStateToProps = state => ({
  singleProduct: state.product.singleProduct
})

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
