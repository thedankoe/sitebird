import React from 'react'
import Helmet from 'react-helmet'
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

const StandardCheckoutConfirm = ({ location }) => (
  <>
    <Helmet title="Confirmation">
      <html lang="en" />
    </Helmet>
    <Layout location={location} headerText="Confirm Your Order">
      <CheckoutWrapper>
        <HeadingStyle>Order Confirmation</HeadingStyle>
        <SubHeadingStyle>Leads are on their way!</SubHeadingStyle>
        <HowListContainer>
          <HowList>
            <HowListItem>
              Standard lead generation package including website optimization,
              social media management, content marketing, and more.
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
            <li>Standard Lead Generation</li>
          </ul>
        </CheckoutLinkContainer>
      </CheckoutWrapper>
    </Layout>
  </>
)

export default StandardCheckoutConfirm
