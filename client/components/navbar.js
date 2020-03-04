import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

const Navbar = props => {
  return (
    <div id="navbar">
      <NavLink to="/home">Home</NavLink>
      <NavLink>Build a Duck</NavLink>
      <NavLink>Outfits</NavLink>
      <NavLink>Accessories</NavLink>
    </div>
  )
}

export default Navbar
