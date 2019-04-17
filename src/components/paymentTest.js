import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import Icon from '../images/sitebird-favicon.png'

const PaymentTest = ({ amount, description }) => {
  const onToken = token => {
    fetch(`https://www.leadbird.io/.netlify/functions/checkout`, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        token,
        amount,
        description,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(res => {
        console.log('Transaction processed successfully', res)
        return res
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  return (
    <div>
      <StripeCheckout
        amount={amount}
        descripton={description}
        image={Icon}
        name="LeadBird.io"
        stripeKey="pk_test_72FFEEfY0jpJ2euL6aEJ5Qrl"
        token={onToken}
      />
    </div>
  )
}

export default PaymentTest
