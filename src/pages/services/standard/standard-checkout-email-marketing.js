import React from 'react'
import Layout from '../../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyleLight,
  CheckoutLink,
} from '../../../components/styles/TextStyles'
import {
  PackageWrapper,
  HowListContainer,
  HowList,
  HowListItem,
} from '../../websites/single-page'
import { CheckoutLinkContainer } from '../../websites/single-page/single-checkout-flat-cms'
import SEO from '../../../components/seo'

const StandardCheckoutEmailMarketing = ({ location }) => (
  <Layout location={location} headerText="Add on Weekly Email Marketing">
    <SEO title="Add on Email Marketing" />
    <PackageWrapper>
      <HeadingStyle>Whats included with email marketing</HeadingStyle>
      <SubHeadingStyle>
        Email marketing is crucial for any business, it allows you to distribute
        content to leads and customers that have already shown interest in your
        business
      </SubHeadingStyle>
      <HowListContainer>
        <HowList>
          <HowListItem>
            Sent using your current email provider. If you do not have one yet
            we set one up using MailChimp or ConvertKit.
          </HowListItem>
          <HowListItem>
            Emails that are designed to convert, written by our content
            strategist.
          </HowListItem>
          <HowListItem>
            Perfect way to directly send content and news to interested leads
            and customers.
          </HowListItem>
        </HowList>
      </HowListContainer>
      <CheckoutLinkContainer>
        <ParagraphStyleLight>
          $200/month to add on, <span>$899/month total</span>
        </ParagraphStyleLight>
        <CheckoutLink to="/services/standard/standard-checkout-email-confirm">
          Add on Email Marketing
        </CheckoutLink>
        <CheckoutLink to="/services/standard/standard-checkout-confirm">
          Continue With Purchase
        </CheckoutLink>
        <ParagraphStyleLight>
          Current total: <span>$699/month</span>
        </ParagraphStyleLight>
      </CheckoutLinkContainer>
    </PackageWrapper>
  </Layout>
)

export default StandardCheckoutEmailMarketing
