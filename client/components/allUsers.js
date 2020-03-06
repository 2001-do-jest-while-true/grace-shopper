import React from 'react'
import {connect} from 'react-redux'
import {fetchAllUsers} from '../store/user'

class AllUsers extends React.Component {
  componentDidMount() {
    this.props.fetchAllUsers()
  }
  render() {
    if (this.props.isAdmin) {
      if (this.props.users.length) {
        return (
          <div>
            {this.props.users.map(user => (
              <div key={user.id}>
                <h3>{user.username}</h3>
                Email:
                {user.email}
              </div>
            ))}
          </div>
        )
      } else {
        return <div>No Users</div>
      }
    } else {
      return <div>Not Authorized!!!</div>
    }
  }
}

const mapStateToProps = state => ({
  users: state.user.users,
  isAdmin: state.user.loggedIn.isAdmin
})
const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)
