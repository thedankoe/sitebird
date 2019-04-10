import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  HeadingStyleLight,
  CheckoutLink,
} from '../../components/styles/TextStyles'
import { CheckMark } from '../../components/styles/IconStyles'
import { BuyWrapper, BuyContainer } from '../../components/buy'
import {
  Card,
  CardContainer,
  CardParagraph,
  CardList,
} from '../../components/servicesCard'
import {
  PackageWrapper,
  PackageContainer,
  HowListContainer,
  HowList,
  HowListItem,
} from './single-page'

const MultiPage = ({ location }) => (
  <>
    <Helmet
      title="SiteBird | Multi Page Conversion Centered Website"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout
      location={location}
      headerText="Multi Page Website"
      headerSub="Converting customers has never been easier."
    >
      <PackageWrapper>
        <HeadingStyle>Why a multi page website?</HeadingStyle>
        <SubHeadingStyle>
          Structuring your website with multiple pages enables you to guide a
          user through vital information until they hit the call to action. Many
          websites do this well, join them.
        </SubHeadingStyle>
        <PackageContainer>
          <div>
            <SubHeadingStyle>Focus on the customer</SubHeadingStyle>
            <ParagraphStyle>
              A customer came to your website because they are interested in
              buying a service or product. Guiding them through the website to
              make contact is difficult but very doable. Good design,
              performance, and best practices are necessary.
            </ParagraphStyle>
          </div>
          <div>
            <SubHeadingStyle>Compartmentalize your information</SubHeadingStyle>
            <ParagraphStyle>
              With multiple pages, you have different places where your customer
              can land. Each page should have the same goal of converting in
              mind yet maintain the integrity of your business on that given
              page. More page on your site equals more pages that can rank in
              search engine results.
            </ParagraphStyle>
          </div>
        </PackageContainer>
        <HowListContainer>
          <HeadingStyle>Benefits of multi page websites</HeadingStyle>
          <HowList>
            <HowListItem>
              Keywords from each page have the ability to rank in Google. 5 more
              pages equals 5 times the organic traffic (if done right).
            </HowListItem>
            <HowListItem>
              You will only have to worry about ranking for targeted content
              (SEO blog posts). We give you detailed emails on how to do this.
            </HowListItem>
            <HowListItem>
              All of your information is on your website, landing pages can be
              purchased in the future for specific campaigns.
            </HowListItem>
            <HowListItem>
              Your website will seem more professional than the rest. As said
              earlier, showcase websites only get so far.
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
              <SubHeadingStyle>1-2s month completion time</SubHeadingStyle>
              <CardParagraph>$999</CardParagraph>
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
              <CheckoutLink to="/websites/multi-page/multi-checkout-flat-cms">
                Continue to Checkout
              </CheckoutLink>
            </Card>
            <Card>
              <HeadingStyle>6 month contract</HeadingStyle>
              <SubHeadingStyle>1-2 months completion time</SubHeadingStyle>
              <CardParagraph>$199/month</CardParagraph>
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
              <CheckoutLink to="/websites/multi-page/multi-checkout-monthly-cms">
                Continue to Checkout
              </CheckoutLink>
            </Card>
          </CardContainer>
        </BuyContainer>
      </BuyWrapper>
    </Layout>
  </>
)

export default MultiPage
