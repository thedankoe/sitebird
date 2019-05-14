import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CheckoutCard from '../components/checkoutCard'
import { PackageWrapper, PackageContainer } from './services'
import { HeadingStyle } from '../components/styles/TextStyles'
import {
  TestimonialContainer,
  RatingIcon,
  RatingContainer,
  TestimonialParagraph,
  VerifiedPurchase,
} from '../components/testimonials'
import ContentDescription from '../components/contentDescriptions'
import { RightIcon } from '../components/styles/IconStyles'

const TestimonialCheckout = styled.div`
  margin-top: ${props => props.theme.textSpace};
  text-align: left;
  div {
    :not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`

const FirstCheckout = styled(Link)`
  color: ${props => props.theme.tertiary};
  font-size: 2.2rem;
  font-weight: 500;
  transition: all ease 0.3s;

  svg {
    font-size: 2.5rem;
    transform: translateY(0.5rem);
  }

  :hover {
    color: ${props => props.theme.tertiaryLight};
  }
`

const ContentCheckout = ({ location }) => (
  <Layout
    location={location}
    headerText="Place your order"
    headerSub="Buy in bulk at a discounted rate"
  >
    <SEO title="Place Your Order" />
    <PackageWrapper>
      <ContentDescription />
      <HeadingStyle>Place your order</HeadingStyle>
      <FirstCheckout to="/first-time-customer">
        First time customers, checkout here to claim your offer! <RightIcon />
      </FirstCheckout>
      <PackageContainer>
        <CheckoutCard />
        <TestimonialCheckout>
          <TestimonialContainer>
            <RatingContainer>
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
            </RatingContainer>
            <VerifiedPurchase>
              Verified Purchase - 30 Second Video
            </VerifiedPurchase>
            <TestimonialParagraph>
              "We wanted a clear and simple video to describe our services which
              you succeeded with. We'll be back again!!"
              <span>Brittany Koenigslieb</span>
            </TestimonialParagraph>
          </TestimonialContainer>
          <TestimonialContainer>
            <RatingContainer>
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
            </RatingContainer>
            <VerifiedPurchase>
              Verified Purchase - 60 Second Video
            </VerifiedPurchase>
            <TestimonialParagraph>
              "Great quality! Describes our business better than we thought it
              would. Will happily recommend to our network."
              <span>Skip &amp; Angee Jones</span>
            </TestimonialParagraph>
          </TestimonialContainer>
        </TestimonialCheckout>
      </PackageContainer>
    </PackageWrapper>
  </Layout>
)

export default ContentCheckout
