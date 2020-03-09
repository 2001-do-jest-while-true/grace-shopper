import React from 'react'
import {connect} from 'react-redux'

import {fetchPastOrders} from '../store'

class OrderHistory extends React.Component {
  componentDidMount() {
    console.log(this.props.user)
    //this.props.fetchPastOrders(this.props.userId)
  }

  render() {
    return <div>Hello</div>
  }
}

// const mapState = state => ({
//   user: state.admin.user
// })

const mapDispatch = dispatch => ({
  fetchPastOrders: userId => dispatch(fetchPastOrders(userId))
})

export default connect(mapState, mapDispatch)(OrderHistory)
