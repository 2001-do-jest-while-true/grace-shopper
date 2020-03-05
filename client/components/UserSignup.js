import React from 'react'
import {connect} from 'react-redux'
import {addUserThunk} from '../store/user'

class UserSignup extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
    //this.handleChange = this.handleChange.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
    this.validateImageUrl = this.validateImageUrl.bind(this)
  }

  // componentDidMount() {}

  handleSubmit(e) {
    e.preventDefault()
    const validEmail = this.validateEmail(e.target.email.value)
    const validImageUrl = this.validateImageUrl(e.target.imageUrl.value)
    if (validEmail && validImageUrl) {
      // e.preventDefault()
      const newUser = {
        username: e.target.username.value,
        imageUrl: e.target.imageUrl.value,
        shippingAddress: [e.target.shippingAddress.value],
        billingAddress: e.target.billingAddress.value,
        email: e.target.email.value,
        password: e.target.password.value
      }
      console.log('THIS IS NEW USER', newUser)
      this.props.addUserThunk(newUser)
    } else {
      alert('User not added') //remove/change this later
    }
  }

  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  validateImageUrl(imageUrl) {
    return imageUrl.match(/\.(jpeg|jpg|gif|png)$/) !== null
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
            required
          />
          <label className="signup-label">Profile Picture</label>
          <input className="signup-input" type="file" name="imageUrl" />
          <label className="signup-label">Shipping Address</label>
          <input className="signup-input" type="text" name="shippingAddress" />
          <label className="signup-label">Billing Address</label>
          <input className="signup-input" type="text" name="billingAddress" />
          <label className="signup-label">Email</label>
          <input className="signup-input" type="text" name="email" required />
          <label className="signup-label">Password</label>
          <input
            className="signup-input"
            type="password"
            name="password"
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
