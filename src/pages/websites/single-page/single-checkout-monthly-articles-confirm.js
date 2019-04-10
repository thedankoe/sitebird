import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyleLight,
} from '../../../components/styles/TextStyles'
import { HowList, HowListItem, HowListContainer } from '../single-page'
import {
  CheckoutWrapper,
  CheckoutLinkContainer,
} from './single-checkout-flat-cms'
import CheckoutPlan from '../../../components/checkoutPlan'

const SingleCheckoutMonthlyArticlesConfirm = ({ location }) => (
  <>
    <Helmet title="Confirmation">
      <html lang="en" />
    </Helmet>
    <Layout location={location} headerText="Confirm Your Order">
      <CheckoutWrapper>
        <HeadingStyle>Order Confirmation</HeadingStyle>
        <SubHeadingStyle>Your website will be started soon!</SubHeadingStyle>
        <HowListContainer>
          <HowList>
            <HowListItem>
              Single page website optimized for on-page SEO, usability, mobile,
              accessability, and performance.
            </HowListItem>
            <HowListItem>
              4 content articles to start off-page SEO on the right foot. Rank
              for more organic keywords, more web traffic.
            </HowListItem>
            <HowListItem>
              Ability to add on pages and functionality at any time. We will
              email you about this.
            </HowListItem>
          </HowList>
        </HowListContainer>
        <CheckoutLinkContainer>
          <CheckoutPlan
            plan="plan_EqjvHJGco4BmjP"
            buttonText="Continue to Checkout"
          />
          <ParagraphStyleLight>
            Current total: <span>$159/month</span>
          </ParagraphStyleLight>
          <ul>
            <li>
              <span>Items:</span>
            </li>
            <li>Single page website (6 month)</li>
            <li>Content articles (6 month)</li>
          </ul>
        </CheckoutLinkContainer>
      </CheckoutWrapper>
    </Layout>
  </>
)

export default SingleCheckoutMonthlyArticlesConfirm
