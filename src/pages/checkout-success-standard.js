import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SuccessBGDesktop from '../images/checkout-success-bg-desktop.jpg'
import SuccessBGTablet from '../images/checkout-success-bg-tablet.jpg'
import SuccessBGMobile from '../images/checkout-success-bg-mobile.jpg'
import { device } from '../components/styles/MediaQueries'
import {
  SubHeadingStyle,
  ParagraphStyle,
} from '../components/styles/TextStyles'
import SEO from '../components/seo'

export const ClientFormWrapper = styled.div`
  padding: ${props => props.theme.sectionSpace} 0;
  background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url(${SuccessBGDesktop});
  background-position: center;
  background-size: cover;

  @media ${device.tabletL} {
    background-image: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
      url(${SuccessBGTablet});
  }

  @media ${device.mobileL} {
    background-image: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
      url(${SuccessBGMobile});
  }
`

export const ClientFormContainer = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.tablet} {
    width: 95%;
  }

  a {
    margin-top: ${props => props.theme.textSpace};
    padding: 1.5rem;
    background: ${props => props.theme.tertiary};
    color: #fff;
    font-size: 2.2rem;
    font-weight: 500;
    border-radius: 3px;
    box-shadow: ${props => props.theme.bs};
    align-self: flex-start;
    transition: all ease 0.3s;

    :hover {
      background: ${props => props.theme.tertiaryLight};
      box-shadow: ${props => props.theme.bsHover};
      transform: translateY(0.3rem);
    }
  }
`

const CheckoutSuccessStandard = ({ location }) => (
  <Layout
    location={location}
    headerText="Your payment was successful"
    headerSub="We need a bit more information about your business"
  >
    <SEO title="Thank you!" />
    <ClientFormWrapper>
      <ClientFormContainer>
        <SubHeadingStyle>
          Before we get started we need a bit more information from you. Please
          click the following button and fill out a form regarding information
          about your business.
        </SubHeadingStyle>
        <ParagraphStyle>
          You can save the forms URL for later if time does not permit. If we
          notice that you did not fill out a form within 48 hours, we will
          contact you.
        </ParagraphStyle>
        <a
          href="https://dankoe.typeform.com/to/uAXHbD"
          rel="noopener noreferrer"
          target="_blank"
        >
          Go to Form
        </a>
      </ClientFormContainer>
    </ClientFormWrapper>
  </Layout>
)

export default CheckoutSuccessStandard
