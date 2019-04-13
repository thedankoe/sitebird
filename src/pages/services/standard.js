import React from 'react'
import Layout from '../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyleLight,
  HeadingStyleLight,
  CheckoutLink,
} from '../../components/styles/TextStyles'
import {
  PackageWrapper,
  HowListContainer,
  HowList,
  HowListItem,
} from '../websites/single-page'
import { CheckoutLinkContainer } from '../websites/single-page/single-checkout-flat-cms'
import SEO from '../../components/seo'

const StandardPage = ({ location }) => (
  <Layout
    location={location}
    headerText="Standard Lead Generation Package"
    headerSub="The perfect package for growth at a great price."
  >
    <SEO title="Standard Lead Generation Package" />
    <PackageWrapper>
      <HeadingStyle>Whats included</HeadingStyle>
      <SubHeadingStyle>
        Our standard package contains just the right amount of marketing
        services to secure quality leads.
      </SubHeadingStyle>
      <HowListContainer>
        <HowList>
          <HowListItem>
            Industry keyword and market research necessary to create conversion
            centered content and designs.
          </HowListItem>
          <HowListItem>
            9+ services in one tailored towards entrepreneurs and small
            businesses at a fraction of the cost of larger agencies.
          </HowListItem>
          <HowListItem>
            Website optimization for mobile, SEO, usability, accessability and
            conversion centered layout.
          </HowListItem>
          <HowListItem>
            Social media management for platforms that are necessary for your
            business to succeed online. Facebook, LinkedIn, and Twitter.
          </HowListItem>
          <HowListItem>
            Weekly content articles based on targeted keywords, written to
            captivate and persuade the user, while providing value.
          </HowListItem>
          <HowListItem>
            Professionally designed graphics and images for content and social
            media posts.
          </HowListItem>
        </HowList>
        <SubHeadingStyle>
          We invite you to view your results on Notion. You will find everything
          here including growth reports, our notes, progress, and research.
        </SubHeadingStyle>
      </HowListContainer>
      <CheckoutLinkContainer>
        <HeadingStyleLight>Standard Package</HeadingStyleLight>
        <CheckoutLink to="/services/standard/standard-checkout-email-marketing">
          Continue With Purchase
        </CheckoutLink>
        <ParagraphStyleLight>
          Current total: <span>$699/month</span>
        </ParagraphStyleLight>
      </CheckoutLinkContainer>
    </PackageWrapper>
  </Layout>
)

export default StandardPage
