import React from 'react'
import {connect} from 'react-redux'

import {fetchPastOrders} from '../store'

class OrderHistory extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
    this.props.fetchPastOrders(userId)
  }

  render() {
    return <div>Hello</div>
  }
}

const mapDispatch = dispatch => ({
  fetchPastOrders: userId => dispatch(fetchPastOrders(userId))
})

export default connect(null, mapDispatch)(OrderHistory)
