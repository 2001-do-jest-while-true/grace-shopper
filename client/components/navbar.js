import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navbar">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="">Build a Duck</NavLink>
      {/* I think you can programmatically do this */}
      <NavLink to="/products?type=outfit">Outfits</NavLink>
      <NavLink to="/products?type=accessory">Accessories</NavLink>
      <NavLink to="/products?type=preset">Presets</NavLink>
    </div>
  )
}

export default Navbar
