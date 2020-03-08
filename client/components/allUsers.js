import React from 'react'
import {connect} from 'react-redux'
import {fetchAllUsers} from '../store'
import SingleUserBox from './singleUserBox'

class AllUsers extends React.Component {
  componentDidMount() {
    this.props.fetchAllUsers()
  }
  render() {
    if (this.props.isAdmin) {
      if (this.props.users.length) {
        return (
          <div className="all-users">
            {this.props.users.map(user => (
              // <div key={user.id}>
              //   <h3>{user.username}</h3>
              //   Email:
              //   {user.email}
              // </div>
              <SingleUserBox key={user.id} {...user} />
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
  users: state.admin.users,
  isAdmin: state.user.isAdmin
})
const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)
