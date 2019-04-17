import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PaymentTest from '../components/paymentTest'

const PaymentTestPage = ({ location }) => (
  <Layout location={location} headerText="Payment Test">
    <SEO title="Payment Test" />
    <PaymentTest />
  </Layout>
)

export default PaymentTestPage
