import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { HeadingStyle, SubHeadingStyle } from '../components/styles/TextStyles'
import { ClientFormWrapper, ClientFormContainer } from './checkout-success'
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
        <SubHeadingStyle>
          Feel free to find us on social media! Just search for VideoBird
          Animated Explainer Videos!
        </SubHeadingStyle>
        <Link to="/#faq">
          Frequently asked questions <RightIcon />
        </Link>
      </ClientFormContainer>
    </ClientFormWrapper>
  </Layout>
)

export default ContactSuccess
