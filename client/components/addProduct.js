import React from 'react'
import {addProductThunk} from '../store'
import {connect} from 'react-redux'

const defaultState = {
  name: '',
  size: 'small',
  type: 'duck',
  category: 'business/casual',
  price: 0,
  quantity: 1,
  description: '',
  imageUrl: ''
}

class AddProduct extends React.Component {
  constructor() {
    super()
    this.state = defaultState
  }
  render() {
    return (
      <div id="addProduct-outer-continer">
        <div id="name-box">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={evt => this.setState({name: evt.target.value})}
          />
        </div>
        <div id="size-box">
          <label htmlFor="size">Size: </label>
          <select
            name="size"
            onChange={evt => this.setState({size: evt.target.value})}
          >
            <option value="small"> Small </option>
            <option value="medium"> Medium </option>
            <option value="large"> Large </option>
            <option value="x-large"> X-Large </option>
          </select>
        </div>
        <div id="type-box">
          <label htmlFor="type">Type: </label>
          <select
            name="type"
            onChange={evt => this.setState({type: evt.target.value})}
          >
            <option value="duck"> Duck </option>
            <option value="accessory"> Accessory </option>
            <option value="preset"> Preset </option>
            <option value="outfit"> Outfit </option>
            <option value="misc"> Miscellaneous </option>
          </select>
        </div>
        <div id="category-box">
          <label htmlFor="category">Category: </label>
          <select
            name="category"
            onChange={evt => this.setState({category: evt.target.value})}
          >
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
            min="0"
            value={this.state.price}
            onChange={evt => this.setState({price: evt.target.value})}
          />
        </div>
        <div id="quantity-box">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            min="1"
            value={this.state.quantity}
            onChange={evt => this.setState({quantity: evt.target.value})}
          />
        </div>
        <div id="description-box">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            value={this.state.description}
            onChange={evt => this.setState({description: evt.target.value})}
          />
        </div>
        <div id="imageUrl-box">
          <label htmlFor="imageUrl">ImageURL:</label>
          <input
            type="text"
            value={this.state.imageUrl}
            onChange={evt => this.setState({imageUrl: evt.target.value})}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            console.log('BUTTON')
            this.props.addProductThunk(this.state)
            this.setState(defaultState)
          }}
        >
          {' '}
          Save Changes
        </button>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  addProductThunk: product => dispatch(addProductThunk(product))
})

export default connect(null, mapDispatch)(AddProduct)
