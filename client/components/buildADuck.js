import React from 'react'
import {connect} from 'react-redux'
import Dinero from 'dinero.js'
import {addDuckThunk, addToCart, addToCartThunk} from '../store'

class BuildADuck extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      size: 'medium',
      type: 'yellow-duck',
      price: 5000,
      outfit: 'Santa Outfit',
      accessory: 'Beret'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit() {
    event.preventDefault()

    let {name, size, type, price, outfit, accessory} = this.state
    let newProduct = {name, size, type, price}

    outfit = this.props.products.find(product => product.name === outfit)
    accessory = this.props.products.find(product => product.name === accessory)
    await this.props.addDuckThunk(newProduct)

    newProduct = this.props.products[this.props.products.length - 1]
    const order = {
      [outfit.id]: 1,
      [accessory.id]: 1,
      [newProduct.id]: 1
    }

    if (!+this.props.loggedIn.id) await this.props.addToCart(order)
    else
      this.props.addToCartThunk(
        this.props.loggedIn.id,
        this.props.orderId,
        order
      )

    this.setState({
      name: '',
      size: 'medium',
      type: 'yellow-duck',
      price: 5000,
      outfit: 'Santa Outfit',
      accessory: 'Beret'
    })
  }

  render() {
    const outfits = this.props.products.filter(
      product => product.type === 'outfit'
    )
    const accessories = this.props.products.filter(
      product => product.type === 'accessory'
    )

    return (
      <div id="duck-container">
        <form id="duck-form" onSubmit={this.handleSubmit}>
          <h1>Build a Duck!</h1>

          <label htmlFor="name">Name Your Duck:</label>
          <input
            value={this.state.name}
            type="text"
            name="name"
            placeholder="Name your duck!"
            onChange={this.handleChange}
          />

          <label htmlFor="size">Size:</label>
          <select
            name="size"
            value={this.state.size}
            onChange={this.handleChange}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-large">X-Large</option>
          </select>

          <label htmlFor="type">Color:</label>
          <select
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
          >
            <option value="yellow-duck">Yellow</option>
            <option value="purple-duck">Purple</option>
            <option value="red-duck">Red</option>
            <option value="blue-duck">Blue</option>
            <option value="silver-duck">Silver</option>
            <option value="gold-duck">Gold</option>
          </select>

          <h2>Choose one of each:</h2>

          <label htmlFor="outfit">Outfit:</label>
          <select
            name="outfit"
            value={this.state.outfit}
            onChange={this.handleChange}
          >
            {outfits.map(outfit => {
              return (
                <option key={outfit.id} value={outfit.name}>
                  {outfit.name}{' '}
                  {Dinero({amount: outfit.price}).toFormat('$0.00')}
                </option>
              )
            })}
          </select>

          <label htmlFor="accessory">Accessory:</label>
          <select
            name="accessory"
            value={this.state.accessory}
            onChange={this.handleChange}
          >
            {accessories.map(accessory => {
              return (
                <option key={accessory.id} value={accessory.name}>
                  {accessory.name}{' '}
                  {Dinero({amount: accessory.price}).toFormat('$0.00')}
                </option>
              )
            })}
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.allProducts,
  loggedIn: state.user,
  orderId: state.cart.orderId
})

const mapDispatch = dispatch => ({
  addDuckThunk: product => dispatch(addDuckThunk(product)),
  addToCart: order => dispatch(addToCart(order)),
  addToCartThunk: (userId, orderId, newProducts) =>
    dispatch(addToCartThunk(userId, orderId, newProducts))
})

export default connect(mapState, mapDispatch)(BuildADuck)
