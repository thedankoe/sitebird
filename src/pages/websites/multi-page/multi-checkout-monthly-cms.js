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
} from '../single-page/single-checkout-flat-cms'

const MultiCheckoutMonthlyCMS = ({ location }) => (
  <>
    <Helmet title="Add on Content Management System">
      <html lang="en" />
    </Helmet>
    <Layout location={location} headerText="Content Management System">
      <CheckoutWrapper>
        <HeadingStyle>Add on Content Management System</HeadingStyle>
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
            $60/month to add on, <span>$259/month total</span>
          </ParagraphStyleLight>
          <CheckoutLink to="/websites/multi-page/multi-checkout-monthly-cms-articles">
            Add on CMS
          </CheckoutLink>
          <CheckoutLink to="/websites/multi-page/multi-checkout-monthly-articles">
            Continue to Checkout
          </CheckoutLink>
          <ParagraphStyleLight>
            Current total: <span>$199/month</span>
          </ParagraphStyleLight>
          <ul>
            <li>
              <span>Items:</span>
            </li>
            <li>Multi page website (6 month)</li>
          </ul>
        </CheckoutLinkContainer>
      </CheckoutWrapper>
    </Layout>
  </>
)

export default MultiCheckoutMonthlyCMS
