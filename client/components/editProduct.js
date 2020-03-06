import React from 'react'
import {editProductThunk} from '../store'
import {connect} from 'react-redux'

class EditProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.singleProduct
  }
  render() {
    return (
      <div id="editProduct-outer-continer">
        <div id="edit-name-box">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={evt => this.setState({name: evt.target.value})}
          />
        </div>
        <div id="edit-size-box">
          <label htmlFor="size">Size: </label>
          <select
            name="edit-size"
            onChange={evt => this.setState({size: evt.target.value})}
          >
            <option value="small"> Small </option>
            <option value="medium"> Medium </option>
            <option value="large"> Large </option>
            <option value="x-large"> X-Large </option>
          </select>
        </div>
        <div id="edit-type-box">
          <label htmlFor="type">Type: </label>
          <select
            name="edit-type"
            onChange={evt => this.setState({type: evt.target.value})}
          >
            <option value="duck"> Duck </option>
            <option value="accessory"> Accessory </option>
            <option value="preset"> Preset </option>
            <option value="outfit"> Outfit </option>
            <option value="misc"> Miscellaneous </option>
          </select>
        </div>
        <div id="edit-category-box">
          <label htmlFor="category">Category: </label>
          <select
            name="edit-category"
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
        <div id="edit-price-box">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            min="0"
            value={this.state.price}
            onChange={evt => this.setState({price: evt.target.value})}
          />
        </div>
        <div id="edit-quantity-box">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            min="1"
            value={this.state.quantity}
            onChange={evt => this.setState({quantity: evt.target.value})}
          />
        </div>
        <div id="edit-description-box">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            value={this.state.description}
            onChange={evt => this.setState({description: evt.target.value})}
          />
        </div>
        <div id="edit-imageUrl-box">
          <label htmlFor="imageUrl">ImageURL:</label>
          <input
            type="text"
            value={this.state.imageUrl}
            onChange={evt => this.setState({imageUrl: evt.target.value})}
          />
        </div>
        <button
          type="button"
          onClick={() => this.props.editProductThunk(this.state.id, this.state)}
        >
          {' '}
          Save Changes
        </button>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  editProductThunk: (productId, product) =>
    dispatch(editProductThunk(productId, product))
})

export default connect(null, mapDispatch)(EditProduct)
