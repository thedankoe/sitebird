import React from 'react'
import { CheckoutButton } from './styles/TextStyles'

const CheckoutSku = class extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe('pk_live_3yKRJ1Fc2DkGl04bIfbQnnXC', {
      betas: ['checkout_beta_4'],
    })
  }

  async redirectToCheckout(event) {
    const { sku, checkoutSlug } = this.props
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku, quantity: 1 }],
      successUrl: `https://www.leadbird.io/checkout-success-${checkoutSlug}/`,
      cancelUrl: `https://www.leadbird.io/`,
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

export default CheckoutSku
