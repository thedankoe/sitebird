import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { HeadingStyle } from '../components/styles/TextStyles'
import {
  ClientFormWrapper,
  ClientFormContainer,
} from './checkout-success-bulk-order'
import { RightIcon } from '../components/styles/IconStyles'
import SEO from '../components/seo'

const ContactSuccess = ({ location }) => (
  <Layout
    location={location}
    headerText="Thank you for contacting us"
    headerSub="We will email you shortly with your requested information"
  >
    <SEO title="Thank you!" />
    <ClientFormWrapper>
      <ClientFormContainer>
        <HeadingStyle>In the mean time...</HeadingStyle>
        <Link to="/blog">
          Check out our growth tips <RightIcon />
        </Link>
        <Link to="/services">
          More information on our services <RightIcon />
        </Link>
        <Link to="/websites">
          Need a new website? <RightIcon />
        </Link>
        <Link to="/faq">
          Frequently asked questions <RightIcon />
        </Link>
      </ClientFormContainer>
    </ClientFormWrapper>
  </Layout>
)

export default ContactSuccess
