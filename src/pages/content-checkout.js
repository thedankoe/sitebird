import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Checkout from '../components/checkoutHooks'

const ContentCheckout = ({ location }) => (
  <Layout location={location} headerText="Payment Test">
    <SEO title="Place Your Order" />
    <Checkout />
  </Layout>
)

export default ContentCheckout
