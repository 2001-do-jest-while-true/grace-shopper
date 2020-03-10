import React from 'react'
import {Link} from 'react-router-dom'
import Dinero from 'dinero.js'

const Purchase = props => {
  const {id, name, description, price, imageUrl} = props.product
  return (
    <div id="purchase-container">
      <img src={imageUrl} />
      <div id="purchase-info">
        <Link to={`/products/${id}`}>
          <h3>{name}</h3>
        </Link>
        <p>{description}</p>
        <p>Price: {Dinero({amount: price}).toFormat('$0.00')}</p>
        <button type="button">
          <Link to={`/products/${id}`} style={{color: 'black'}}>
            Buy again!
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Purchase
