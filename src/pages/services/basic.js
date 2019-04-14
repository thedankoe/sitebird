import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
} from '../../components/styles/TextStyles'
import SEO from '../../components/seo'
import StandardCard from '../../components/standardCard'
import { device } from '../../components/styles/MediaQueries'
import BasicBGDesktop from '../../images/checkout-success-bg-desktop.jpg'
import BasicBGTablet from '../../images/checkout-success-bg-tablet.jpg'
import BasicBGMobile from '../../images/checkout-success-bg-mobile.jpg'

const BasicWrapper = styled.div`
  width: 100%;
  background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url(${BasicBGDesktop});
  background-position: center;
  background-size: cover;
  text-align: center;

  @media ${device.tabletL} {
    background-image: url(${BasicBGTablet});
  }

  @media ${device.tabletS} {
    text-align: left;
  }

  @media ${device.mobileL} {
    background-image: url(${BasicBGMobile});
  }
`

const BasicContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: ${props => props.theme.sectionSpace} 0;
`

const BasicPage = ({ location }) => (
  <Layout
    location={location}
    headerText="Basic Lead Generation Package"
    headerSub="Optimized content for your blog and social media"
  >
    <SEO title="Basic Lead Generation Package" />
    <BasicWrapper>
      <BasicContainer>
        <HeadingStyle>Choose your quantity</HeadingStyle>
        <SubHeadingStyle>
          Once you choose your quantity, you will be directed to a payment page.
          After payment, you will get an email with a form to fill out regarding
          information we need about your business to get started.
        </SubHeadingStyle>
        <StandardCard />
      </BasicContainer>
    </BasicWrapper>
    {/* Testimonials */}
  </Layout>
)

export default BasicPage
