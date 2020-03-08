import React from 'react'
import {addProductThunk, editProductThunk} from '../store'
import {connect} from 'react-redux'
import Dinero from 'dinero.js'

const defaultState = {
  name: '',
  size: 'small',
  type: 'yellow-duck',
  category: 'misc',
  price: 0,
  quantity: 1,
  description: '',
  imageUrl: ''
}

class UpdateProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
    this.state = this.props.product ? this.props.product : defaultState
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
  }

  handlePriceChange(evt) {
    this.setState({
      price: evt.target.value * 100
    })
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleClick() {
    this.props.resetDisplay()
    this.props.name === 'add'
      ? this.props.addProductThunk(this.state)
      : this.props.editProductThunk(this.props.product.id, this.state)
  }

  render() {
    console.log('STATE PRICE', this.state.price)
    console.log('DINERO TO UNIT', typeof Dinero(this.state.price).toUnit())
    console.log('DINER TO OBJ', Dinero(this.state.price).toObject())
    return (
      <div id="updateProduct-outer-continer">
        <div id="name-box">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div id="size-box">
          <label htmlFor="size">Size: </label>
          <select name="size" onChange={this.handleChange}>
            <option value="small"> Small </option>
            <option value="medium"> Medium </option>
            <option value="large"> Large </option>
            <option value="x-large"> X-Large </option>
          </select>
        </div>
        <div id="type-box">
          <label htmlFor="type">Type: </label>
          <select name="type" onChange={this.handleChange}>
            <option value="yellow-duck"> Yellow duck </option>
            <option value="purple-duck"> Purple duck </option>
            <option value="red-duck"> Red duck </option>
            <option value="blue-duck"> Blue duck </option>
            <option value="gold-duck"> Gold duck </option>
            <option value="silver-duck"> Silver duck </option>
            <option value="accessory"> Accessory </option>
            <option value="preset"> Preset </option>
            <option value="outfit"> Outfit </option>
            <option value="misc"> Miscellaneous </option>
          </select>
        </div>
        <div id="category-box">
          <label htmlFor="category">Category: </label>
          <select name="category" onChange={this.handleChange}>
            <option value="business/casual"> Business/Casual </option>
            <option value="halloween"> Halloween </option>
            <option value="medieval"> Medieval </option>
            <option value="gamer"> Gamer </option>
            <option value="summer"> Summer </option>
            <option value="xmas"> X-mas </option>
            <option value="misc"> Miscellaneous </option>
          </select>
        </div>
        <div id="price-box">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            min="0"
            value={this.state.price / 100}
            onChange={this.handlePriceChange}
          />
        </div>
        <div id="quantity-box">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            name="quantity"
            min="1"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
        </div>
        <div id="description-box">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>
        <div id="imageUrl-box">
          <label htmlFor="imageUrl">ImageURL:</label>
          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
        </div>
        <button type="button" onClick={this.handleClick}>
          {' '}
          Save{' '}
        </button>
      </div>
    )
  }
}

const mapAdd = state => {
  return {
    name: 'add',
    displayName: 'Add '
  }
}

const mapEdit = state => {
  return {
    name: 'edit',
    display: 'Edit '
  }
}

const mapDispatch = dispatch => ({
  addProductThunk: product => dispatch(addProductThunk(product)),
  editProductThunk: (productId, product) =>
    dispatch(editProductThunk(productId, product))
})

export const AddProduct = connect(mapAdd, mapDispatch)(UpdateProduct)
export const EditProduct = connect(mapEdit, mapDispatch)(UpdateProduct)
