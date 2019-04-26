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
    headerText="Growth Tips for Your Blog and Social Media"
    headerSub="Learn how to grow your online presence through content creation"
  >
    <SEO
      title="Growth Tips for Your Blog and Social Media"
      description="Learn how to grow your online presence through content creation. Learn SEO, online marketing, and how to implement them."
      keyword={['growth tips for small business', 'content marketing']}
    />
    <BlogPageHeading>
      Growing you business with content marketing
    </BlogPageHeading>
    <GrowthTipsBlog />
  </Layout>
)

export default BlogPage
