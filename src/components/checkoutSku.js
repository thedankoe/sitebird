import React from 'react'
import { CheckoutButton } from './styles/TextStyles'

const CheckoutSku = class extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe('pk_live_3yKRJ1Fc2DkGl04bIfbQnnXC', {
      betas: ['checkout_beta_4'],
    })
  }

  async redirectToCheckout(event) {
    const { sku } = this.props
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku, quantity: 1 }],
      successUrl: `https://www.site-bird.com/checkout-success/`,
      cancelUrl: `https://www.site-bird.com/`,
    })

    if (error) {
      console.warn('Error:', error)
    }
  }

  render() {
    const { buttonText } = this.props
    return (
      <CheckoutButton
        type="button"
        onClick={event => this.redirectToCheckout(event)}
      >
        {buttonText}
      </CheckoutButton>
    )
  }
}

export default CheckoutSku
