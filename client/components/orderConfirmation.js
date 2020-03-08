import React from 'react'

const OrderConfirmation = props => {
  let orderId = props.location.search.split('=')[1]

  // Display nothing for orderId if it is a guest order
  if (!orderId) orderId = ''

  return (
    <div id="confirmation-container">
      <div id="confirmation-box">
        <h2>Order {orderId} has been placed!</h2>
      </div>
    </div>
  )
}

export default OrderConfirmation
