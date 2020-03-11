import React from 'react'
import {connect} from 'react-redux'
import {deleteUserThunk, editUserThunk} from '../store/user'

class UserEditAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirm: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
    this.validateImageUrl = this.validateImageUrl.bind(this)
    this.validatePassword = this.validatePassword.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleDelete() {
    this.props.deleteUserThunk(this.props.user.id)
  }
  handleSubmit(e) {
    e.preventDefault()

    const validImageUrl = this.validateImageUrl(e.target.imageUrl.value)
    const validEmail = this.validateEmail(e.target.email.value)
    const confirmBothPassword = this.validatePassword(
      e.target.password.value,
      e.target.password_confirm.value
    )
    if (confirmBothPassword === false) {
      alert('Please confirm correct password')
    } else {
      const updateUser = {
        username: e.target.username.value,
        imageUrl: e.target.imageUrl.value,
        email: e.target.email.value,
        password: e.target.password.value
      }
      this.props.editUserThunk(this.props.user.id, updateUser)
    }

  }

  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  validateImageUrl(imageUrl) {
    return imageUrl.match(/\.(jpeg|jpg|gif|png)$/) !== null
  }

  validatePassword(password, confirmpassword) {
    return password === confirmpassword
  }

  render() {
    return (
      <div className="signup-div">
        <h1>Edit Account</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label className="signup-label">Username</label>
            <input
              onChange={this.handleChange}
              className="signup-input"
              type="text"
              name="username"
              value={this.state.username}
            />
          </div>
          <div>
            <label className="signup-label">Email</label>
            <input
              onChange={this.handleChange}
              className="signup-input"
              type="text"
              name="email"
              value={this.state.email}
            />
          </div>

          <div />
          <div className="signup-upload-wrapper">
            <button className="signup-upload-btn">Upload your picture</button>
            <input className="signup-upload-btn" type="file" name="imageUrl" />
          </div>
          <div>
            <div>
              <label className="signup-label">Password</label>
              <input
                onChange={this.handleChange}
                className="signup-input"
                type="password"
                name="password"
                value={this.state.password}
              />
            </div>

            <div>
              {' '}
              <label className="signup-label">Confirm Password</label>
              <input
                onChange={this.handleChange}
                className="signup-input"
                type="password"
                name="password_confirm"
                value={this.state.password_confirm}
              />
            </div>
          </div>
          <label className="signup-label">Billing Address</label>
          <input className="signup-input" type="text" name="billingAddress" />
          <br />
          <div className="edit-btn">
            <input
              className="signup-submit"
              type="submit"
              value="Submit Change"
            />
            <button className="signup-delete" onClick={this.handleDelete}>
              Delete
            </button>
          </div>
        </form>
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
