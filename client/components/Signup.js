import React from 'react'
import {connect} from 'react-redux'
import {fetchAllUsers} from '../store/user'

class Signup extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
    this.validateUsername = this.validateUsername.bind(this)
  }

  componentDidMount() {}

  handleSubmit(e) {
    // e.preventDefault()
    const validEmail = this.validateEmail(e.target.email.value)
  }

  handleChange(e) {}

  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  validateUsername(username) {}

  render() {
    return (
      <div className="signup-form">
        <form onSubmit={this.handleSubmit}>
          <label className="signup-label">Username</label>
          <input className="signup-input" type="text" name="username" />
          <label className="signup-label">Profile Picture</label>
          <input className="signup-input" type="file" name="imageUrl" />
          <label className="signup-label">Shipping Address</label>
          <input className="signup-input" type="text" name="shippingAddress" />
          <label className="signup-label">Billing Address</label>
          <input className="signup-input" type="text" name="billingAddress" />
          <label className="signup-label">Email</label>
          <input className="signup-input" type="text" name="email" />
          <label className="signup-label">Password</label>
          <input className="signup-input" type="password" name="password" />
          <input
            className="signup-submit"
            type="submit"
            name="submit"
            value="Submit"
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

// const User = db.define('user', {
//   username: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   },
//   isAdmin: {
//     type: Sequelize.BOOLEAN,
//     defaultValue: false
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     defaultValue:
//       'https://image.shutterstock.com/image-vector/duck-vector-icon-260nw-670089019.jpg'
//   },
//   shippingAddress: Sequelize.ARRAY(Sequelize.TEXT),
//   billingAddress: Sequelize.TEXT,
//   email: {
//     type: Sequelize.STRING,
//     unique: true,
//     allowNull: false
//   },
//   password: {
//     type: Sequelize.STRING,
//     // Making `.password` act like a func hides it when serializing to JSON.
//     // This is a hack to get around Sequelize's lack of a "private" option.
//     get() {
//       return () => this.getDataValue('password')
//     }
//   },
//   salt: {
//     type: Sequelize.STRING,
//     // Making `.salt` act like a function hides it when serializing to JSON.
//     // This is a hack to get around Sequelize's lack of a "private" option.
//     get() {
//       return () => this.getDataValue('salt')
//     }
//   },
//   googleId: {
//     type: Sequelize.STRING
//   },
//   facebookId: {
//     type: Sequelize.STRING
//   }
// })
