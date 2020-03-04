import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

const Navbar = props => {
  return (
    <div id="navbar">
      <NavLink to="/home">Home</NavLink>
      <NavLink>Build a Duck</NavLink>
      <NavLink to="/products?type=outfit">Outfits</NavLink>
      <NavLink to="/products?type=accessory">Accessories</NavLink>
      <NavLink to="/products?type=preset">Presets</NavLink>
    </div>
  )
}

export default Navbar
