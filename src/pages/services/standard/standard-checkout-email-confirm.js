import React from 'react'
import Layout from '../../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyleLight,
} from '../../../components/styles/TextStyles'
import {
  HowList,
  HowListItem,
  HowListContainer,
} from '../../websites/single-page'
import {
  CheckoutWrapper,
  CheckoutLinkContainer,
} from '../../websites/single-page/single-checkout-flat-cms'
import CheckoutPlan from '../../../components/checkoutPlan'
import SEO from '../../../components/seo'

const StandardCheckoutEmailConfirm = ({ location }) => (
  <Layout location={location} headerText="Confirm Your Order">
    <SEO title="Confirmation" />
    <CheckoutWrapper>
      <HeadingStyle>Order Confirmation</HeadingStyle>
      <SubHeadingStyle>
        After payment, you will be redirected to a form to fill out regarding
        your businesses information.
      </SubHeadingStyle>
      <HowListContainer>
        <HowList>
          <HowListItem>
            Standard content marketing package including website optimization,
            social media management, content marketing, and more.
          </HowListItem>
          <HowListItem>
            Weekly email marketing with copywriting that converts.
          </HowListItem>
          <HowListItem>
            Invitation to your businesses page on Notion where we track
            everything like our research, keywords, progress, and growth
            reports.
          </HowListItem>
        </HowList>
      </HowListContainer>
      <CheckoutLinkContainer>
        <CheckoutPlan
          plan="plan_EsKuBkRVniuU66"
          buttonText="Continue to Checkout"
        />
        <ParagraphStyleLight>
          Current total: <span>$699</span>
        </ParagraphStyleLight>
        <ul>
          <li>
            <span>Items:</span>
          </li>
          <li>Standard Content Marketing</li>
          <li>Email Marketing</li>
        </ul>
      </CheckoutLinkContainer>
    </CheckoutWrapper>
  </Layout>
)

export default StandardCheckoutEmailConfirm
