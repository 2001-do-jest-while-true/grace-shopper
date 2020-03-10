import React from 'react'
import {connect} from 'react-router-dom'

class UserEditAccount extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Edit User Account Page
        <form>
          <label>Username: </label>
          <input type="text" name="username" />
          <label>Email: </label>
          <input type="text" name="email" />
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
      </div>
    )
  }
}

// const mapState = state => ({
//   user: state.user
// })
// // const mapDispatch = dispatch => ({})

// export default connect(mapState, mapDispatch)(UserEditAccount)
