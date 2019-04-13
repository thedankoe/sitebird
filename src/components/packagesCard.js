import React from 'react'
import { CheckMark } from './styles/IconStyles'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
} from './styles/TextStyles'
import {
  CardContainer,
  Card,
  CardParagraph,
  CardList,
  CardLink,
} from './servicesCard'

const PackagesCard = () => (
  <CardContainer>
    <Card>
      <HeadingStyle>Standard</HeadingStyle>
      <SubHeadingStyle>
        Website optimization, social media management, and content creation.
      </SubHeadingStyle>
      <CardParagraph>$699/month</CardParagraph>
      <ParagraphStyle>month to month contract</ParagraphStyle>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          Optimize website for SEO, mobile, usability, and accessability.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Management of Facebook, LinkedIn, and Twitter pages. Daily (weekday)
          posts and engagement.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Weekly content articles or 'newsletters', perfect for organic traffic
          and social shares.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Professionally designed content and posts that are shown to convert.
        </li>
      </CardList>
      <CardLink to="/services/standard">Learn More</CardLink>
    </Card>
    <Card>
      <HeadingStyle>Premium</HeadingStyle>
      <SubHeadingStyle>
        Website creation, social media management, and content creation
      </SubHeadingStyle>
      <CardParagraph>$899 for 6 months</CardParagraph>
      <ParagraphStyle>then</ParagraphStyle>
      <CardParagraph>$699/month</CardParagraph>
      <ParagraphStyle>month to month contract</ParagraphStyle>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          Website creation optimized for SEO, mobile, usability, and
          accessability.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Designed for your business with up to 6 custom pages. Includes an
          email capture input and contact form.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Revisions for 1 month after website completion. We want you to
          completely satisfied.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Everything offered in Standard package.
        </li>
      </CardList>
      <CardLink to="/websites/multi-page">Learn More</CardLink>
    </Card>
  </CardContainer>
)

export default PackagesCard
