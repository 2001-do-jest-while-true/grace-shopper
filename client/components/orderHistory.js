import React from 'react'
import {connect} from 'react-redux'
import {fetchPastOrders} from '../store'
import Purchase from './purchase'

class OrderHistory extends React.Component {
  constructor() {
    super()
    this.state = {
      filter: new Date().getFullYear()
    }
  }
  componentDidMount() {
    const userId = this.props.match.params.userId
    this.props.fetchPastOrders(userId)
  }

  render() {
    console.log('ORDERS IN COMP', this.props.orders)
    return (
      <div id="order-history-container">
        <div id="search-bar-container">
          <h1 id="page-title">Your Orders</h1>
          <div id="search-contianer">
            <input type="text" placeholder="Search orders" />
            <button type="button">Search</button>
          </div>
        </div>
        <div id="order-filter-container">
          <p>{this.props.orders.length} orders placed in</p>
          <select name="filter">
            <option value={this.state.filter}>past 6 months </option>
            <option value={this.state.filter - 1}>
              {this.state.filter - 1}
            </option>
            <option value={this.state.filter - 2}>
              {this.state.filter - 2}
            </option>
            <option value={this.state.filter - 3}>
              {this.state.filter - 3}
            </option>
            <option value={this.state.filter - 4}>
              {this.state.filter - 4}
            </option>
            <option value={this.state.filter - 5}>
              {this.state.filter - 5}
            </option>
          </select>
        </div>
        <div id="purchases-container">
          {Object.entries(this.props.orders).map(purchase => (
            <Purchase key={purchase.id} product={purchase} />
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
