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
      <PreviousPrice>$597</PreviousPrice>
      <CardParagraph>$497</CardParagraph>
      <ParagraphStyle>flat fee - 14 day delivery</ParagraphStyle>
      <CardLink to="/services/basic">Learn More</CardLink>
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
            <strong>with copy and images</strong>.
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
        1 month worth of content articles and social media posts done for you.
      </SubHeadingStyle>
      <CardParagraph>$797/month</CardParagraph>
      <ParagraphStyle>month to month contract</ParagraphStyle>
      <CardLink to="/services/standard">Learn More</CardLink>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          Management of Facebook, LinkedIn, and Twitter pages. Daily (weekday)
          posts and engagement. 20 posts per month.
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
        <li>
          <div>
            <CheckMark />
          </div>
          *BONUS* Website audit with detailed optimization fixes in the form of
          a checklist.
        </li>
      </CardList>
    </Card>
  </CardContainer>
)

export default PackagesCard
