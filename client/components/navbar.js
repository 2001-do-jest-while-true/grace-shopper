import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'

const Navbar = props => {
  return (
    <div id="navbar">
      <Link to="/home">Home</Link>
      <Link to="/build">Build a Duck</Link>
      <Link to="/products?type=outfit">Outfits</Link>
      <Link to="/products?type=accessory">Accessories</Link>
      <Link to="/products?type=preset">Presets</Link>
    </div>
  )
}

export default Navbar
