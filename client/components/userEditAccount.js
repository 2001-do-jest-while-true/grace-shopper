import React from 'react'
import {connect} from 'react-redux'
import {deleteUserThunk, editUserThunk} from '../store/user'

class UserEditAccount extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete() {
    this.props.deleteUserThunk(this.props.user.id)
  }
  handleSubmit(e) {
    e.preventDefault()

    const updateUser = {
      username: e.target.username.value,
      imageUrl: e.target.imageUrl.value,
      email: e.target.email.value,
      password: e.target.password.value
    }

    this.props.editUserThunk(this.props.user.id, updateUser)
  }
  render() {
    return (
      <div>
        Edit User Account Page
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input type="text" name="username" />
          <label>Email: </label>
          <input type="text" name="email" />
          <label>Profile Picture</label>
          <input className="signup-input" type="file" name="imageUrl" />
          <label>Password: </label>
          <input type="password" name="password" />
          <label>Confirm Password: </label>
          <input type="password" name="password_confirm" />
          {/* <label>Shipping Addresses: </label>
          <input type="text" name="shippingAddress" /> */}
          <label>Billing Address: </label>
          <input type="text" name="billingAddress" />
          <br />

          <input type="submit" value="Submit Change" />
        </form>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  editUserThunk: (userId, user) => dispatch(editUserThunk(userId, user)),
  deleteUserThunk: userId => dispatch(deleteUserThunk(userId))
})

export default connect(mapState, mapDispatch)(UserEditAccount)
