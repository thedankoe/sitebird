import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { device } from '../components/styles/MediaQueries'
import {
  SubHeadingStyle,
  ParagraphStyle,
} from '../components/styles/TextStyles'
import SEO from '../components/seo'
import { ClientFormWrapper, ClientFormContainer } from './checkout-success'
import { CardList } from '../components/servicesCard'
import { CheckMark } from '../components/styles/IconStyles'

const FirstTimeList = styled(CardList)`
  width: 100%;
  margin: ${props => props.theme.textSpace} 0;

  @media ${device.tabletS} {
    width: 100%;
  }
`

const CheckoutSuccessBulkOrder = ({ location }) => (
  <Layout
    location={location}
    headerText="Claim your offer here!"
    headerSub="$100-$300 off our video packages"
  >
    <SEO title="First Time Customer" />
    <ClientFormWrapper>
      <ClientFormContainer>
        <SubHeadingStyle>
          Clicking this link will take you to a secure form to select your video
          length and give us information on your business / topic.
        </SubHeadingStyle>
        <ParagraphStyle>
          This form is how we check to see if you are a first time customer.
          This is the same form you would receive from checking out normally, we
          include a secure payment option at the end that calculates your offer.
        </ParagraphStyle>
        <FirstTimeList>
          <li>
            <CheckMark />
            $100 off 30 second video - $397 total
          </li>
          <li>
            <CheckMark />
            $200 off 60 second video - $697 total
          </li>
          <li>
            <CheckMark />
            $300 off 90 second video - $997 total
          </li>
        </FirstTimeList>
        <a
          href="https://dankoe.typeform.com/to/pXONtC"
          rel="noopener noreferrer"
          target="_blank"
        >
          Go to Form
        </a>
      </ClientFormContainer>
    </ClientFormWrapper>
  </Layout>
)

export default CheckoutSuccessBulkOrder
