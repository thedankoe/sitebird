import React from 'react'
import styled from 'styled-components'
import GrowthTipsBlog from '../components/growthTips'
import { HeadingStyle } from '../components/styles/TextStyles'
import Layout from '../components/layout'
import { device } from '../components/styles/MediaQueries'
import SEO from '../components/seo'

const BlogPageHeading = styled(HeadingStyle)`
  margin-top: ${props => props.theme.sectionSpace};

  @media ${device.tabletS} {
    width: 95%;
    margin: ${props => props.theme.sectionSpace} auto
      ${props => props.theme.textSpace} auto;
  }
`

const BlogPage = ({ location }) => (
  <Layout
    location={location}
    headerText="Growth Tips for Small Businesses and Entrepreneurs"
    headerSub="Learn how to grow your online presence as a small business owner or entrepreneur"
  >
    <SEO
      title="Growth Tips for Small Businesses and Entrepreneurs"
      description="Learn how to grow your online presence as an entrepreneur or small business. Learn SEO, online marketing, and how to implement them."
      keyword={['growth tips for small business', 'content marketing']}
    />
    <BlogPageHeading>
      Growing you business with content marketing
    </BlogPageHeading>
    <GrowthTipsBlog />
  </Layout>
)

export default BlogPage
