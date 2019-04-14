import React from 'react'
import styled from 'styled-components'
import { CheckMark } from './styles/IconStyles'
import { SubHeadingStyle, ParagraphStyle } from './styles/TextStyles'
import {
  CardContainer,
  Card,
  CardParagraph,
  CardList,
  CardLink,
} from './servicesCard'

export const PreviousPrice = styled(CardParagraph)`
  text-decoration: line-through;
  opacity: 0.5;
`

const PackagesCard = () => (
  <CardContainer>
    <Card>
      <SubHeadingStyle>
        Conversion centered content articles and social media posts for organic
        growth.
      </SubHeadingStyle>
      <PreviousPrice>$497</PreviousPrice>
      <CardParagraph>$397</CardParagraph>
      <ParagraphStyle>flat fee - 14 day delivery</ParagraphStyle>
      <CardLink to="/services/basic">Order Now</CardLink>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          2 conversion centered and SEO optimized content articles (blog posts).
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          <div>
            10 professionally designed social media posts{' '}
            <strong>with content and images</strong>.
          </div>
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Kickstart your online presence with researched keywords that will grow
          organic traffic and leads.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Bulk orders at discounted rate.
        </li>
      </CardList>
    </Card>
    <Card>
      <SubHeadingStyle>
        Website optimization, social media management, and content creation.
      </SubHeadingStyle>
      <CardParagraph>$699/month</CardParagraph>
      <ParagraphStyle>month to month contract</ParagraphStyle>
      <CardLink to="/services/standard">Order Now</CardLink>
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
    </Card>
  </CardContainer>
)

export default PackagesCard
