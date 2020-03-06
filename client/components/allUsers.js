import React from 'react'
import {connect} from 'react-redux'
import {fetchAllUsers} from '../store'

class AllUsers extends React.Component {
  componentDidMount() {
    this.props.fetchAllUsers()
  }
  render() {
    if (this.props.users) {
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
  }
}

const mapStateToProps = state => ({
  users: state.admin.users
})
const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)
