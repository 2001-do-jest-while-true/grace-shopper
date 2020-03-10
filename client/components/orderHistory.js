import React from 'react'
import {connect} from 'react-redux'
import {fetchPastOrders} from '../store'
import Purchase from './purchase'

class OrderHistory extends React.Component {
  constructor() {
    super()
    this.state = {
      currentYear: new Date().getFullYear(),
      filter: String(new Date().getFullYear())
    }
    this.handleChange = this.handleChange.bind(this)
  }

  async handleChange(evt) {
    await this.setState({
      filter: evt.target.value
    })
  }

  componentDidMount() {
    const userId = this.props.match.params.userId
    this.props.fetchPastOrders(userId)
  }

  render() {
    return (
      <div id="order-history-container">
        <div id="search-bar-container">
          <h1 id="page-title">Your Orders</h1>
          <div id="search-container">
            <input type="text" placeholder="Search orders" />
            <button type="button">Search</button>
          </div>
        </div>
        <div id="order-filter-container">
          <p> Orders placed in </p>
          <select
            name="filter"
            value={this.state.filter}
            onChange={this.handleChange}
          >
            <option value={this.state.currentYear}>past 6 months </option>
            <option value={this.state.currentYear - 1}>
              {this.state.currentYear - 1}
            </option>
            <option value={this.state.currentYear - 2}>
              {this.state.currentYear - 2}
            </option>
            <option value={this.state.currentYear - 3}>
              {this.state.currentYear - 3}
            </option>
            <option value={this.state.currentYear - 4}>
              {this.state.currentYear - 4}
            </option>
            <option value={this.state.currentYear - 5}>
              {this.state.currentYear - 5}
            </option>
          </select>
        </div>
        <div>
          {Object.keys(this.props.orders)
            .filter(order => order.split(':')[1].startsWith(this.state.filter))
            .map(order => (
              <div key={order} id="purchases-container">
                <div id="order-details">
                  <div id="date-container">
                    <h3>Order Date</h3>
                    <p>{order.split(':')[1]}</p>
                  </div>
                  <div id="id-container">
                    <h3>Order # </h3>
                    <p>{order.split(':')[0]}</p>
                  </div>
                </div>
                <div id="purchases-details">
                  {this.props.orders[order].map(product => (
                    <Purchase key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  orders: state.order
})

const mapDispatch = dispatch => ({
  fetchPastOrders: userId => dispatch(fetchPastOrders(userId))
})

export default connect(mapState, mapDispatch)(OrderHistory)
