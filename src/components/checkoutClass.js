import React from 'react'
import { CheckoutButton, ParagraphStyle } from './styles/TextStyles'

const Checkout = class extends React.Component {
  state = {
    disabled: false,
    buttonText: 'BUY NOW',
    paymentMessage: '',
    name: 'Change me',
    amount: null,
    description: 'Description',
  }

  componentDidMount() {
    this.stripeHandler = window.StripeCheckout.configure({
      key: 'pk_test_72FFEEfY0jpJ2euL6aEJ5Qrl',
      closed: () => {
        this.resetButton()
      },
    })
  }

  resetButton() {
    this.setState({ disabled: false, buttonText: 'BUY NOW' })
  }

  openStripeCheckout(event) {
    const { name, amount, description } = this.state
    event.preventDefault()
    this.setState({ disabled: true, buttonText: 'WAITING...' })
    this.stripeHandler.open({
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
            this.resetButton()
            this.setState({ paymentMessage: 'Payment Successful!' })
            return res
          })
          .catch(error => {
            console.error('Error:', error)
            this.setState({ paymentMessage: 'Payment Failed' })
          })
      },
    })
  }

  render() {
    const { disabled, paymentMessage, buttonText } = this.state
    return (
      <>
        <CheckoutButton
          type="button"
          onClick={event => this.openStripeCheckout(event)}
          disabled={disabled}
        >
          {buttonText}
        </CheckoutButton>
        <ParagraphStyle>{paymentMessage}</ParagraphStyle>
      </>
    )
  }
}

export default Checkout
