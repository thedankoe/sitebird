import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
} from '../../components/styles/TextStyles'
import SEO from '../../components/seo'
import BulkCard from '../../components/bulkCard'
import { device } from '../../components/styles/MediaQueries'
import BasicBGDesktop from '../../images/checkout-success-bg-desktop.jpg'
import BasicBGTablet from '../../images/checkout-success-bg-tablet.jpg'
import BasicBGMobile from '../../images/checkout-success-bg-mobile.jpg'
import {
  PackageWrapper,
  HowListContainer,
  HowList,
  HowListItem,
  HowListItemDetail,
} from '../websites/single-page'

export const BasicWrapper = styled.div`
  width: 100%;
  background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url(${BasicBGDesktop});
  background-position: center;
  background-size: cover;
  box-shadow: ${props => props.theme.bs};
  text-align: center;

  @media ${device.tabletL} {
    background-image: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
      url(${BasicBGTablet});
  }

  @media ${device.tabletS} {
    text-align: left;
  }

  @media ${device.mobileL} {
    background-image: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
      url(${BasicBGMobile});
  }
`

export const BasicContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 0 ${props => props.theme.sectionSpace} 0;
  text-align: center;

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.tabletS} {
    width: 95%;
    text-align: left;
  }
`

const BasicPage = ({ location }) => (
  <Layout
    location={location}
    headerText="Bulk Content Marketing Package"
    headerSub="Optimized content for your blog and social media in bulk"
  >
    <SEO title="Bulk Content Marketing Package" />
    <PackageWrapper>
      <HeadingStyle>What's included</HeadingStyle>
      <HowListContainer>
        <HowList>
          <HowListItem>
            Conversion centered and SEO optimized content articles (blog posts).
            These are perfect for sharing on social media and sharing with your
            email list.
          </HowListItem>
          <HowListItemDetail>
            Content articles heavily influence SEO. We target specific keywords
            that will grow in search engine ranking over time. They also get
            more views and engagement than the average social post.
          </HowListItemDetail>
          <HowListItem>
            Professionally designed social media graphics that draw in the eye
            of the user. You can choose the topics (special events, great deals,
            etc.) or we choose them for you.
          </HowListItem>
          <HowListItemDetail>
            Posting consistently on priority social platforms is necessary for
            your online business, everyones been told this. Make it easy with
            premade posts.
          </HowListItemDetail>
          <HowListItem>
            Written content to go along with post graphics, all you need to do
            is copy and paste to any social media platform of your choice.
          </HowListItem>
          <HowListItemDetail>
            Having the right content for your posts heavily determines
            conversion rates.
          </HowListItemDetail>
        </HowList>
      </HowListContainer>
    </PackageWrapper>
    <BasicContainer>
      <HeadingStyle>Choose your quantity</HeadingStyle>
      <SubHeadingStyle>
        Once you choose your quantity, you will be directed to a payment page.
        After payment, you will be redirected to a form to fill out regarding
        your businesses information.
      </SubHeadingStyle>
      <BulkCard />
    </BasicContainer>
    {/* Testimonials */}
  </Layout>
)

export default BasicPage
