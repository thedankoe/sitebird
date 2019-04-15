import React from 'react'
import { CheckoutButton } from './styles/TextStyles'

const CheckoutSkuTest = class extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_72FFEEfY0jpJ2euL6aEJ5Qrl', {
      betas: ['checkout_beta_4'],
    })
  }

  async redirectToCheckout(event) {
    const { sku, checkoutSlug } = this.props
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku, quantity: 1 }],
      successUrl: `http://localhost:8000/checkout-success-${checkoutSlug}/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.warn('Error:', error)
    }
  }

  render() {
    const { buttonText, blue } = this.props
    return (
      <CheckoutButton
        blue={blue}
        type="button"
        onClick={event => this.redirectToCheckout(event)}
      >
        {buttonText}
      </CheckoutButton>
    )
  }
}

export default CheckoutSkuTest
