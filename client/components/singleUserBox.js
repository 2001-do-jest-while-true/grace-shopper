import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleUser} from '../store'

class SingleUserBox extends React.Component {
  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.userId)
  }

  render() {
    const user = this.props.singleUser
    return (
      <div className="single-user-box">
        <div className="single-user-img-box">
          <img src={user.imageUrl} />
        </div>
        <div className="single-user-info-box">
          <h3>{user.username}</h3>
          <p>Email:{user.email}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  singleUser: state.singleUser
})

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: userId => dispatch(fetchSingleUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleUserBox)
