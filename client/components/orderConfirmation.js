import React from 'react'

const OrderConfirmation = props => {
  let orderId = props.location.search.split('=')[1]

  return (
    <div id="confirmation-container">
      <div id="confirmation-box">
        <h2>Order {orderId > 0 && orderId} has been placed!</h2>
      </div>
    </div>
  )
}

export default OrderConfirmation
