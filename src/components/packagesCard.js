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
        Conversion centered and SEO optimized articles that will increase
        engagement and organic web traffic.
      </SubHeadingStyle>
      <PreviousPrice>$107</PreviousPrice>
      <CardParagraph>$97</CardParagraph>
      <ParagraphStyle>1 article - 5 day delivery</ParagraphStyle>
      <CardLink to="/content-checkout">Order Now</CardLink>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          One 1200 word conversion centered and SEO optimized content article
          (blog post).
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          <div>
            2 focused keywords, researched by us to maximize search engine
            ranking.
          </div>
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Extensive topic research for us to write an article that engages its
          reader.
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
      <HeadingStyle>Social Media Posts</HeadingStyle>
      <SubHeadingStyle>
        Professionally designed graphics and copywriting for social media posts.
      </SubHeadingStyle>
      <PreviousPrice>$107</PreviousPrice>
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
