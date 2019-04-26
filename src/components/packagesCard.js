import React from 'react'
import styled from 'styled-components'
import { CheckMark } from './styles/IconStyles'
import {
  SubHeadingStyle,
  ParagraphStyle,
  HeadingStyle,
} from './styles/TextStyles'
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
      <HeadingStyle>Blog Posts</HeadingStyle>
      <SubHeadingStyle>
        Conversion centered and SEO optimized articles that increase organic web
        traffic.
      </SubHeadingStyle>
      <PreviousPrice>$117</PreviousPrice>
      <CardParagraph>$97</CardParagraph>
      <ParagraphStyle>1 article - 5 day delivery</ParagraphStyle>
      <CardLink to="/content-checkout">Order Now</CardLink>
      <CardList>
        <li>
          <span>
            <CheckMark />
          </span>
          One 1000+ word conversion centered and SEO optimized content article
          (blog post).
        </li>
        <li>
          <span>
            <CheckMark />
          </span>
          Extensive topic research for us to write an article that engages its
          reader.
        </li>
        <li>
          <span>
            <CheckMark />
          </span>
          <span>
            2 focused keywords per topic to maximize search engine ranking.
          </span>
        </li>
        <li>
          <span>
            <CheckMark />
          </span>
          Bulk orders at discounted rate.
        </li>
      </CardList>
    </Card>
    <Card>
      <HeadingStyle>Social Media Posts</HeadingStyle>
      <SubHeadingStyle>
        Professionally designed graphics and copywriting for social media posts.
      </SubHeadingStyle>
      <PreviousPrice>$117</PreviousPrice>
      <CardParagraph>$97</CardParagraph>
      <ParagraphStyle>5 posts - 5 day delivery</ParagraphStyle>
      <CardLink to="/content-checkout">Order Now</CardLink>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          5 professionally designed social media graphics, optimized for
          platform of your choice.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          75-100 words of copywriting per post based on your topic of choice.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Competitor and keyword research to ensure views and engagement.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Bulk orders at a discounted rate.
        </li>
      </CardList>
    </Card>
  </CardContainer>
)

export default PackagesCard
