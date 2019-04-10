import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  ProblemLink,
} from '../components/styles/TextStyles'
import Layout from '../components/layout'
import Buy from '../components/buy'
import {
  PackageWrapper,
  PackageContainer,
  HowListContainer,
  HowList,
  HowListItem,
} from './websites/single-page'
import { RightIcon } from '../components/styles/IconStyles'

const OurWebsitesPage = ({ location }) => (
  <>
    <Helmet
      title="Conversion Centered Landing Pages for Small Businesses | SiteBird"
      meta={[
        {
          name: 'description',
          content:
            'Small businesses need an optimized and beautiful website now more than ever. With our design and development, you will never worry about hiring another developer.',
        },
        {
          name: 'keywords',
          content:
            'local marketing services, rank in search results, grow small business online',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout
      location={location}
      headerText="Conversion Centered Landing Pages"
      headerSub="Captivate the user, capture information, convert to a buyer"
    >
      <PackageWrapper>
        <HeadingStyle>The 3 c's of landing pages</HeadingStyle>
        <SubHeadingStyle>
          Captivate, capture, convert. These are what our landing page designs
          revolve around. We take your businesses offer and make it
          irresistable.
        </SubHeadingStyle>
        <PackageContainer>
          <div>
            <SubHeadingStyle>The perfect advertisement</SubHeadingStyle>
            <ParagraphStyle>
              Advertisements only go so far. Imagine putting time and effort
              into creating a great ad, then what happens? The user is
              interested, they click through to a landing page and they
              immediately click away because of the layout or CTA.
            </ParagraphStyle>
          </div>
          <div>
            <SubHeadingStyle>Conversion centered design</SubHeadingStyle>
            <ParagraphStyle>
              We specialize in providing fully optimized 'things' on the web,
              this includes landing pages. If we told you that we loved to read
              case studies in our free time would you think we are crazy? We
              provide landing pages with statistically backed layouts.
            </ParagraphStyle>
          </div>
        </PackageContainer>
        <HowListContainer>
          <HeadingStyle>Captivate, capture, convert.</HeadingStyle>
          <HowList>
            <HowListItem>
              Our landing pages follow the same process as our websites. We
              strategize, prototype, and revise.
            </HowListItem>
            <HowListItem>
              Depending on the content and difficulty, we finish landing pages
              within 4-7 days. Revisions are accepted for 1 week after
              completion.
            </HowListItem>
            <HowListItem>
              We can integrate with anything. All email providers (MailChimp,
              Converkit, etc.), payment services (Stripe, Paypal, BrainTree),
              and CRMs.
            </HowListItem>
            <SubHeadingStyle>
              Still have some questions? We dont bite.
            </SubHeadingStyle>
            <ProblemLink to="/contact">
              Request more information
              <RightIcon />
            </ProblemLink>
          </HowList>
        </HowListContainer>
      </PackageWrapper>
      <Buy location={location} />
    </Layout>
  </>
)

export default OurWebsitesPage
