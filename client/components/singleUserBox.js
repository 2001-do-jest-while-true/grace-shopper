import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteSingleUser} from '../store'

const SingleUserBox = props => {
  const handleDeleteUser = () => {
    props.deleteSingleUser(props.id)
  }

  return (
    <div className="single-user-box">
      <div className="single-user-box-details">
        <div className="single-user-img-box">
          <img src={props.imageUrl} />
        </div>
        <div className="single-user-info-box">
          <Link to={`/users/${props.id}`}>
            <h3>{props.username}</h3>
          </Link>
          <p>Email:{props.email}</p>
          {props.isAdmin ? (
            <p className="admin-priv">Administrator privleges</p>
          ) : (
            <p className="no-admin-priv">No Administrator privleges</p>
          )}
        </div>
      </div>
      <div className="single-user-box-buttons">
        <Link to={`/users/${props.id}`}>
          <button type="button">Edit User</button>
        </Link>
        <button type="button" onClick={handleDeleteUser}>
          Delete User
        </button>

      </div>
    </div>
  )
}
