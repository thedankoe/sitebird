import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  HeadingStyleLight,
  CheckoutLink,
} from '../../components/styles/TextStyles'
import { CheckMark } from '../../components/styles/IconStyles'
import { device } from '../../components/styles/MediaQueries'
import { BuyWrapper, BuyContainer } from '../../components/buy'
import {
  Card,
  CardContainer,
  CardParagraph,
  CardList,
} from '../../components/servicesCard'

export const PackageWrapper = styled.div`
  position: relative;
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.sectionSpace} 0;
  text-align: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tabletS} {
    text-align: left;
  }
`

export const PackageContainer = styled.div`
  margin: ${props => props.theme.textSpace} auto 0 auto;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`

export const HowListContainer = styled.div`
  margin: ${props => props.theme.textSpace} auto 0 auto;

  h3 {
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media ${device.tabletS} {
      width: 95%;
    }
  }
`

export const HowList = styled.ul`
  width: 70%;
  margin: 0 auto ${props => props.theme.textSpace} auto;
  list-style: none;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }
`

export const HowListItem = styled.li`
  margin-bottom: 2.5rem;
  padding-left: 1.5rem;
  color: ${props => props.theme.primaryLight};
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 1.8;
  text-align: left;
  border-left: 2px solid ${props => props.theme.secondaryLight};
`

export const HowListItemDetail = styled.li`
  margin-left: 2.5rem;
  margin-bottom: 2.5rem;
  color: ${props => props.theme.secondary};
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 1.8;
  text-align: left;
`

const SinglePage = ({ location }) => (
  <>
    <Helmet
      title="Single Page Optimized Website Creation | SiteBird"
      meta={[
        {
          name: 'description',
          content:
            'Fully optimized single page websites contain all of your content on one page. Mobile responsive, usability tested, fast performance, and SEO optimized.',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout
      location={location}
      headerText="Single Page Website"
      headerSub="Get the point across, get customers buying."
    >
      <PackageWrapper>
        <HeadingStyle>Why a single page website?</HeadingStyle>
        <SubHeadingStyle>
          Single page websites have been growing in popularity recently, even
          large companies with multiple pages have most of the information you
          would ever need on their home page.
        </SubHeadingStyle>
        <PackageContainer>
          <div>
            <SubHeadingStyle>Focus on the customer</SubHeadingStyle>
            <ParagraphStyle>
              A customer came to your website because they are interested in
              buying a service or product. Having everything they need on one
              page will only increase their chances of buying. Then, it's up to
              your website to convert.
            </ParagraphStyle>
          </div>
          <div>
            <SubHeadingStyle>Centralize your information</SubHeadingStyle>
            <ParagraphStyle>
              One page is more than enough to display the information you need.
              Most websites have a jumble of information that is either not
              targeted, or useless in having customers buy from you. Let your
              website display what customers want.
            </ParagraphStyle>
          </div>
        </PackageContainer>
        <HowListContainer>
          <HeadingStyle>Benefits of single page websites</HeadingStyle>
          <HowList>
            <HowListItem>
              Customers only have one place to go and one place to buy.
            </HowListItem>
            <HowListItem>
              You will only have to worry about ranking for targeted content
              (SEO blog posts). We give you detailed emails on how to do this.
            </HowListItem>
            <HowListItem>
              More pages can be added at any time, even though it may not be
              needed.
            </HowListItem>
            <HowListItem>
              All of your information is in one place, you do not need to send
              customers to specific pages.
            </HowListItem>
          </HowList>
          <SubHeadingStyle>
            We touch base weekly with updates on your website, any changes you
            want to make during this time are implemented.
          </SubHeadingStyle>
        </HowListContainer>
      </PackageWrapper>
      <BuyWrapper>
        <BuyContainer>
          <HeadingStyleLight>Start Converting</HeadingStyleLight>
          <CardContainer>
            <Card>
              <HeadingStyle>Flat Fee</HeadingStyle>
              <SubHeadingStyle>1 month completion time</SubHeadingStyle>
              <CardParagraph>$499</CardParagraph>
              <ParagraphStyle>1 month of revisions</ParagraphStyle>
              <CardList>
                <li>
                  <div>
                    <CheckMark />
                  </div>
                  Professionally designed with your businesses colors and ideals
                </li>
                <li>
                  <div>
                    <CheckMark />
                  </div>
                  Contact form connected to your business email, spam protected
                </li>
                <li>
                  <div>
                    <CheckMark />
                  </div>
                  Conversion centered colors, call to actions, and content
                </li>
              </CardList>
              <CheckoutLink to="/websites/single-page/single-checkout-flat-cms">
                Continue to Checkout
              </CheckoutLink>
            </Card>
            <Card>
              <HeadingStyle>6 month contract</HeadingStyle>
              <SubHeadingStyle>2 month completion time</SubHeadingStyle>
              <CardParagraph>$119/month</CardParagraph>
              <ParagraphStyle>1 month of revisions</ParagraphStyle>
              <CardList>
                <li>
                  <div>
                    <CheckMark />
                  </div>
                  Professionally designed with your businesses colors and ideals
                </li>
                <li>
                  <div>
                    <CheckMark />
                  </div>
                  Contact form connected to your business email, spam protected
                </li>
                <li>
                  <div>
                    <CheckMark />
                  </div>
                  Conversion centered colors, call to actions, and content
                </li>
              </CardList>
              <CheckoutLink to="/websites/single-page/single-checkout-monthly-cms">
                Continue to Checkout
              </CheckoutLink>
            </Card>
          </CardContainer>
        </BuyContainer>
      </BuyWrapper>
    </Layout>
  </>
)

export default SinglePage
