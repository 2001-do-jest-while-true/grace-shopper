import React from 'react'
import {connect} from 'react-redux'
import AllProducts from './allProducts'
import AllUsers from './allUsers'

class AdminUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayAllProducts: true,
      displayAllUsers: false
    }
    this.handleAllProdClick = this.handleAllProdClick.bind(this)
    this.handleAllUserClick = this.handleAllUserClick.bind(this)
  }

  handleAllProdClick() {
    this.setState({
      displayAllProducts: this.toggleDisplayAllProd(),
      displayAllUsers: false
    })
  }

  toggleDisplayAllProd() {
    return !this.state.displayAllProducts
  }

  handleAllUserClick() {
    this.setState({
      displayAllProducts: false,
      displayAllUsers: this.toggleDisplayAllUser()
    })
  }

  toggleDisplayAllUser() {
    return !this.state.displayAllUsers
  }

  render() {
    return (
      <div className="admin-user">
        <h2>Welcome {this.props.email}!</h2>
        <div className="admin-option-buttons">
          <button type="button" onClick={this.handleAllUserClick}>
            All Users
          </button>
          <button type="button" onClick={this.handleAllProdClick}>
            All Products
          </button>
        </div>
        {this.state.displayAllProducts && <AllProducts />}
        {this.state.displayAllUsers && <AllUsers />}
      </div>
    )
  }
}

const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(AdminUser)
