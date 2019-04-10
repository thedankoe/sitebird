import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  CheckoutLink,
  ParagraphStyleLight,
} from '../../../components/styles/TextStyles'
import { HowList, HowListItem, HowListContainer } from '../single-page'
import {
  CheckoutWrapper,
  CheckoutLinkContainer,
} from './single-checkout-flat-cms'

const SingleCheckoutMonthlyCMS = ({ location }) => (
  <>
    <Helmet title="Add on Contentful CMS">
      <html lang="en" />
    </Helmet>
    <Layout location={location} headerText="Content Management System">
      <CheckoutWrapper>
        <HeadingStyle>Add on contentful CMS</HeadingStyle>
        <SubHeadingStyle>
          We give you the ability to edit content that is crucial to your
          business rather than reaching out to us to change it for you. This can
          be added on at any time after purchase.
        </SubHeadingStyle>
        <HowListContainer>
          <HowList>
            <HowListItem>
              Edit content that changes with your business (business hours,
              promotional offers, etc.).
            </HowListItem>
            <HowListItem>
              Add blog posts at any time from an intuitive interface, this is
              crucial for off-page SEO and future growth.
            </HowListItem>
            <HowListItem>
              We stay out of your hair. Rather than having us update your
              information for you, do it yourself with ease.
            </HowListItem>
          </HowList>
          <SubHeadingStyle>
            This can be added on at any time down the road, there is no pressure
            to do it now.
          </SubHeadingStyle>
        </HowListContainer>
        <CheckoutLinkContainer>
          <ParagraphStyleLight>
            $40/month to add on, <span>$159/month total</span>
          </ParagraphStyleLight>
          <CheckoutLink to="/websites/single-page/single-checkout-monthly-cms-articles">
            Add on CMS
          </CheckoutLink>
          <CheckoutLink to="/websites/single-page/single-checkout-monthly-articles">
            Continue to Checkout
          </CheckoutLink>
          <ParagraphStyleLight>
            Current total: <span>$119/month</span>
          </ParagraphStyleLight>
          <ul>
            <li>
              <span>Items:</span>
            </li>
            <li>Single page website (6 month)</li>
          </ul>
        </CheckoutLinkContainer>
      </CheckoutWrapper>
    </Layout>
  </>
)

export default SingleCheckoutMonthlyCMS
