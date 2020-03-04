import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleUser} from '../store'

class SingleUser extends React.Component {
  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.userId)
  }

  render() {
    console.log(this.props.singleUser)
    if (this.props.singleUser) {
      const user = this.props.singleUser
      let shippingCounter = 0
      return (
        <div className="single-user-main">
          <h1>User Info</h1>
          <div className="single-user-pane">
            <div className="single-user-info">
              <p>Username: {user.username}</p>
              <p>email: {user.email}</p>
              <p>Admin: {JSON.stringify(user.isAdmin)}</p>
              <br />
              <p>googleId: {user.googleId}</p>
              <p>facebookId: {user.facebookId}</p>
            </div>
            <div className="single-user-img">
              <img src={user.imageUrl} />
            </div>
          </div>
          <div className="single-user-billing">
            <h2>Billing Address</h2>
            <p>{user.billingAddress}</p>
          </div>
          <div className="single-user-shipping">
            <h2>Shipping Addresses</h2>
            {user.shippingAddress &&
              user.shippingAddress.map(address => {
                return <p key={shippingCounter++}>{address}</p>
              })}
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = state => ({
  singleUser: state.user.singleUser
})

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: id => dispatch(fetchSingleUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser)
