import React from 'react'
import styled from 'styled-components'
import { CheckMark } from './styles/IconStyles'
import { ParagraphStyle, HeadingStyle } from './styles/TextStyles'
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
      <HeadingStyle>30 Second Video</HeadingStyle>
      <PreviousPrice>$797</PreviousPrice>
      <CardParagraph>$497</CardParagraph>
      <ParagraphStyle>2-3 week delivery</ParagraphStyle>
      <CardLink blue to="/content-checkout">
        Order Now
      </CardLink>
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
            1 focused keyword per topic to maximize search engine ranking.
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
      <HeadingStyle>60 Second video</HeadingStyle>
      <PreviousPrice>$1497</PreviousPrice>
      <CardParagraph>$897</CardParagraph>
      <ParagraphStyle>2-3 week delivery</ParagraphStyle>
      <CardLink to="/content-checkout">Order Now</CardLink>
      <ParagraphStyle style={{ marginTop: '3rem' }}>BEST SELLER</ParagraphStyle>
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
          Designed to maintain the integrity of your business.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Like hiring a graphic designer, at a fraction of the cost.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Bulk orders at a discounted rate.
        </li>
      </CardList>
    </Card>
    <Card>
      <HeadingStyle>90 second video</HeadingStyle>
      <PreviousPrice>$2197</PreviousPrice>
      <CardParagraph>$1297</CardParagraph>
      <ParagraphStyle>2-3 week delivery</ParagraphStyle>
      <CardLink blue to="/content-checkout">
        Order Now
      </CardLink>
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
          Designed to maintain the integrity of your business.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Like hiring a graphic designer, at a fraction of the cost.
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
