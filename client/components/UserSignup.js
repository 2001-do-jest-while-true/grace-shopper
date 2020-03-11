import React from 'react'
import {connect} from 'react-redux'
import {addUserThunk} from '../store/user'

class UserSignup extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmpassword: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
    this.validateImageUrl = this.validateImageUrl.bind(this)
    this.validatePassword = this.validatePassword.bind(this)
  }

  handleChange(e) {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    const validImageUrl = this.validateImageUrl(e.target.imageUrl.value)
    const validEmail = this.validateEmail(e.target.email.value)
    const confirmBothPassword = this.validatePassword(
      e.target.password.value,
      e.target.confirmpassword.value
    )

    if (validImageUrl === false && e.target.imageUrl.value !== '') {
      // eslint-disable-next-line no-alert
      alert('Please upload only in jpeg, png, jpg, gif')
    } else if (confirmBothPassword === false) {
      // eslint-disable-next-line no-alert
      alert('Password and Confirm password is not the same!')
    } else if (validEmail === true) {
      const newUser = {
        username: e.target.username.value,
        imageUrl: e.target.imageUrl.value,
        email: e.target.email.value,
        password: e.target.password.value
      }
      this.props.addUserThunk(newUser)
      this.props.history.push('/home')
    } else {
      // eslint-disable-next-line no-alert
      alert('User not added') //remove/change this later
    }
    // alert('Please upload in png,jpeg,jpg, or gif only')
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
      <div className="signup-form">
        <form onSubmit={this.handleSubmit}>
          <label className="signup-label">Username</label>
          <input
            className="signup-input"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <label className="signup-label">Profile Picture</label>
          <input className="signup-input" type="file" name="imageUrl" />

          <label className="signup-label">Email</label>
          <input
            className="signup-input"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label className="signup-label">Password</label>
          <input
            className="signup-input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Confirm Password:</label>
          <input
            className="signup-input"
            type="password"
            name="confirmpassword"
            value={this.state.confirmpassword}
            onChange={this.handleChange}
            required
          />
          <button className="signup-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addUserThunk: user => dispatch(addUserThunk(user))
})

export default connect(null, mapDispatchToProps)(UserSignup)
