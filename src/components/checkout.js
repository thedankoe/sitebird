import React, { useState, useEffect } from 'react'
import { CheckoutButton, ParagraphStyle } from './styles/TextStyles'

const Checkout = ({ amount, description }) => {
  const [disabled, setDisabled] = useState(false)
  const [buttonText, setButtonText] = useState('Place Order!')
  const [paymentMessage, setPaymentMessage] = useState('')
  const [stripeHandler, setStripeHandler] = useState({ hits: [] })

  function resetButton() {
    setDisabled(false)
    setButtonText('Place Order!')
  }

  useEffect(() => {
    const handler = window.StripeCheckout.configure({
      key: 'pk_live_3yKRJ1Fc2DkGl04bIfbQnnXC',
      closed: () => {
        resetButton()
      },
    })
    setStripeHandler(handler)
  }, [])

  const openStripeCheckout = event => {
    event.preventDefault()
    setDisabled(true)
    setButtonText('WAITING...')
    stripeHandler.open({
      name: 'LeadBird Content Marketing',
      amount,
      description,
      token: token => {
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
            resetButton()
            setPaymentMessage('Payment Successful!')
            window.location.href = 'https://leadbird.io/checkout-success'
            return res
          })
          .catch(error => {
            setPaymentMessage('Payment Failed')
          })
      },
    })
  }
  return (
    <>
      <CheckoutButton
        type="button"
        onClick={event => openStripeCheckout(event, stripeHandler)}
        disabled={disabled}
      >
        {buttonText}
      </CheckoutButton>
      <ParagraphStyle>{paymentMessage}</ParagraphStyle>
    </>
  )
}

export default Checkout
