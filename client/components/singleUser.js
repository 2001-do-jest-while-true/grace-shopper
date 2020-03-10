import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleUser, updateSingleUser, deleteSingleUser} from '../store'
import {Link, Redirect} from 'react-router-dom'


class SingleUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deletedUser: false
    }
    this.handleAdminOnClick = this.handleAdminOnClick.bind(this)
    this.handleDeleteOnClick = this.handleDeleteOnClick.bind(this)

  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.userId)
  }

  handleAdminOnClick() {
    this.props.updateSingleUser(this.props.match.params.userId, {
      isAdmin: !this.props.singleUser.isAdmin
    })
  }


  handleDeleteOnClick() {
    this.setState({deletedUser: true})
    this.props.deleteSingleUser(this.props.match.params.userId)
  }

  render() {
    if (this.props.isAdmin) {
      if (this.state.deletedUser) {
        return <Redirect to="/home" />
      }
      if (this.props.singleUser.username) {
        const user = this.props.singleUser
        let shippingCounter = 0
        return (
          <div className="single-user-main">
            <Link to="/home">Back to Home</Link>
            <div className="single-user-details">
              <h1>User Info</h1>
              <div className="single-user-pane">
                <div className="single-user-info">
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                  <p>Admin: {JSON.stringify(user.isAdmin)}</p>
                </div>
                <div className="single-user-img">
                  <img src={user.imageUrl} />
                </div>
              </div>
              <div>
                <button type="button" onClick={this.handleAdminOnClick}>
                  {user.isAdmin
                    ? 'Remove Administrator Privledges'
                    : 'Make Administrator'}
                </button>
              </div>
              <div className="single-user-billing">
                <h2>Billing Address</h2>
                <p>{user.billingAddress}</p>
              </div>
              <div className="single-user-shipping">
                <h2>Shipping Addresses</h2>
                {user.shipping_addresses &&
                  user.shipping_addresses.map(address => {
                    return (
                      <div key={++shippingCounter} className="shipping-address">
                        <h3>{address.fullName}</h3>
                        <div>{address.address1}</div>
                        {address.address2 && <div>{address.address2}</div>}
                        <div>{address.city}</div>
                        <div>{address.state}</div>
                        <div>{address.zip}</div>
                        <div>{address.phoneNumber}</div>
                      </div>
                    )
                  })}
              </div>
            </div>
            <div className="single-user-deletebtn">

              <button type="button" onClick={this.handleDeleteOnClick}>
                Delete User
              </button>
              <button type="button">Delete User</button>

            </div>
          </div>
        )
      } else {
        return <div>Loading...</div>
      }
    } else {
      return <div>Not authorized!</div>
    }
  }
}

const mapStateToProps = state => ({
  singleUser: state.admin.user,
  isAdmin: state.user.isAdmin
})

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: id => dispatch(fetchSingleUser(id)),

  updateSingleUser: (id, user) => dispatch(updateSingleUser(id, user)),
  deleteSingleUser: id => dispatch(deleteSingleUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser)
