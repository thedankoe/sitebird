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
import CheckoutSku from '../../../components/checkoutSku'

const SingleCheckoutFlatConfirm = ({ location }) => (
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
              Ability to add on pages and functionality at any time. We will
              email you about this.
            </HowListItem>
          </HowList>
        </HowListContainer>
        <CheckoutLinkContainer>
          <CheckoutSku
            sku="sku_Eqjmqf1ivqPN1u"
            buttonText="Continue to Checkout"
          />
          <ParagraphStyleLight>
            Current total: <span>$499</span>
          </ParagraphStyleLight>
          <ul>
            <li>
              <span>Items:</span>
            </li>
            <li>Single page website</li>
          </ul>
        </CheckoutLinkContainer>
      </CheckoutWrapper>
    </Layout>
  </>
)

export default SingleCheckoutFlatConfirm
