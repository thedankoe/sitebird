import React, { useState, useEffect } from 'react'
import { CheckoutButton, ParagraphStyle } from './styles/TextStyles'

const Checkout = () => {
  const [disabled, setDisabled] = useState(false)
  const [buttonText, setButtonText] = useState('BUY NOW')
  const [paymentMessage, setPaymentMessage] = useState('')
  const [name, setName] = useState('Change me')
  const [amount, setAmount] = useState(2500)
  const [description, setDescription] = useState('Description')
  const [stripeHandler, setStripeHandler] = useState({ hits: [] })

  function resetButton() {
    setDisabled(false)
    setButtonText('BUY NOW')
  }

  useEffect(() => {
    const handler = window.StripeCheckout.configure({
      key: 'pk_test_72FFEEfY0jpJ2euL6aEJ5Qrl',
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
      name,
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
            console.log('Transaction processed successfully')
            resetButton()
            setPaymentMessage('Payment Successful!')
            return res
          })
          .catch(error => {
            console.error('Error:', error)
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
