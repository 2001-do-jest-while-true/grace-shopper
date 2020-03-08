import React from 'react'
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'
// import {fetchSingleUser} from '../store'

const SingleUserBox = props => {
  // console.log('THESE ARE THE PROPS', props)
  return (
    <div className="single-user-box">
      <div className="single-user-img-box">
        <img src={props.imageUrl} />
      </div>
      <div className="single-user-info-box">
        <Link to={`/users/${props.id}`}>
          <h3>{props.username}</h3>
        </Link>
        <p>Email:{props.email}</p>
        {props.isAdmin && <p className="admin-priv">Administrator privleges</p>}
      </div>
    </div>
  )
}

export default SingleUserBox
// class SingleUserBox extends React.Component {
//   componentDidMount() {
//     this.props.fetchSingleUser(this.props.match.params.userId)
//   }

//   render() {
//     const user = this.props.singleUser
//     return (
//       <div className="single-user-box">
//         <div className="single-user-img-box">
//           <img src={user.imageUrl} />
//         </div>
//         <div className="single-user-info-box">
//           <h3>{user.username}</h3>
//           <p>Email:{user.email}</p>
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   singleUser: state.singleUser
// })

// const mapDispatchToProps = dispatch => ({
//   fetchSingleUser: userId => dispatch(fetchSingleUser(userId))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(SingleUserBox)
