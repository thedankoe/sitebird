import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyleLight,
  CheckoutLink,
} from '../../../components/styles/TextStyles'
import { HowList, HowListItem, HowListContainer } from '../single-page'
import {
  CheckoutWrapper,
  CheckoutLinkContainer,
} from './single-checkout-flat-cms'

const SingleCheckoutFlatCMSArticles = ({ location }) => (
  <>
    <Helmet title="Add on Content Articles">
      <html lang="en" />
    </Helmet>
    <Layout location={location} headerText="Off-page SEO with content articles">
      <CheckoutWrapper>
        <HeadingStyle>Add on Content Articles</HeadingStyle>
        <SubHeadingStyle>
          Content is the lifeblood of off-page SEO. Rank more pages with content
          articles based on researched keywords. This exponentially increases
          your chance of ranking for more keywords.
        </SubHeadingStyle>
        <HowListContainer>
          <HowList>
            <HowListItem>
              Includes a blog page along with your single page website, this is
              necessary to rank for more keywords.
            </HowListItem>
            <HowListItem>
              4 content articles are included with the blog page. This
              quadruples your chances of ranking in SERPs (Search Engine Results
              Pages).
            </HowListItem>
            <HowListItem>
              On-page SEO is great for optimizing your website, content articles
              compliment this by leading targeted traffic to your website
              organically.
            </HowListItem>
          </HowList>
          <SubHeadingStyle>
            This can be added on at any time down the road, there is no pressure
            to do it now.
          </SubHeadingStyle>
        </HowListContainer>
        <CheckoutLinkContainer>
          <ParagraphStyleLight>
            $200 to add on, <span>$899 total</span>
          </ParagraphStyleLight>
          <CheckoutLink to="/websites/single-page/single-checkout-flat-cms-articles-confirm">
            Add on Articles
          </CheckoutLink>
          <CheckoutLink to="/websites/single-page/single-checkout-flat-cms-confirm">
            Continue with Purchase
          </CheckoutLink>
          <ParagraphStyleLight>
            Current total: <span>$699</span>
          </ParagraphStyleLight>
          <ul>
            <li>
              <span>Items:</span>
            </li>
            <li>Single page website</li>
            <li>Contentful CMS</li>
          </ul>
        </CheckoutLinkContainer>
      </CheckoutWrapper>
    </Layout>
  </>
)

export default SingleCheckoutFlatCMSArticles
