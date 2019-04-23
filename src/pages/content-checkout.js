import React from 'react'
import styled from 'styled-components'
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

const TestimonialCheckout = styled.div`
  div {
    :not(:last-child) {
      margin-bottom: 2rem;
    }
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
      <HeadingStyle>Whats Included</HeadingStyle>
      <ContentDescription />
      <HeadingStyle>Place your order</HeadingStyle>
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
            <VerifiedPurchase>Verified Purchase</VerifiedPurchase>
            <TestimonialParagraph>
              "They made sure our website was optimized before we purchased blog
              posts, the writing quality is amazing!"
              <span>Brittany - Mattress Guru</span>
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
            <VerifiedPurchase>Verified Purchase</VerifiedPurchase>
            <TestimonialParagraph>
              "Great articles and posts, will be buying again. Our organic
              traffic has been steadily going up!"
              <span>Skip &amp; Angee - Caveman Printing and Apparel</span>
            </TestimonialParagraph>
          </TestimonialContainer>
        </TestimonialCheckout>
      </PackageContainer>
    </PackageWrapper>
  </Layout>
)

export default ContentCheckout
