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
      <CardLink blue to="/checkout">
        Order Now
      </CardLink>
      <CardList>
        <li>
          <span>
            <CheckMark />
          </span>
          Dedicated project manager
        </li>
        <li>
          <span>
            <CheckMark />
          </span>
          Script writer
        </li>
        <li>
          <span>
            <CheckMark />
          </span>
          <span>Male or female voiceover</span>
        </li>
        <li>
          <span>
            <CheckMark />
          </span>
          Professional animator
        </li>
        <li>
          <span>
            <CheckMark />
          </span>
          Background music
        </li>
      </CardList>
    </Card>
    <Card>
      <HeadingStyle>60 Second video</HeadingStyle>
      <PreviousPrice>$1497</PreviousPrice>
      <CardParagraph>$897</CardParagraph>
      <ParagraphStyle>2-3 week delivery</ParagraphStyle>
      <CardLink to="/checkout">Order Now</CardLink>
      <ParagraphStyle style={{ marginTop: '3rem' }}>BEST SELLER</ParagraphStyle>
      <CardList>
        <li>
          <span>
            <CheckMark />
          </span>
          Dedicated project manager
        </li>
        <li>
          <span>
            <CheckMark />
          </span>
          Script writer
        </li>
        <li>
          <span>
            <CheckMark />
          </span>
          <span>Male or female voiceover</span>
        </li>
        <li>
          <span>
            <CheckMark />
          </span>
          Professional animator
        </li>
        <li>
          <span>
            <CheckMark />
          </span>
          Background music
        </li>
      </CardList>
    </Card>
    <Card>
      <HeadingStyle>90 second video</HeadingStyle>
      <PreviousPrice>$2197</PreviousPrice>
      <CardParagraph>$1297</CardParagraph>
      <ParagraphStyle>2-3 week delivery</ParagraphStyle>
      <CardLink blue to="/checkout">
        Order Now
      </CardLink>
      <CardList>
        <li>
          <span>
            <CheckMark />
          </span>
          Dedicated project manager
        </li>
        <li>
          <span>
            <CheckMark />
          </span>
          Script writer
        </li>
        <li>
          <span>
            <CheckMark />
          </span>
          <span>Male or female voiceover</span>
        </li>
        <li>
          <span>
            <CheckMark />
          </span>
          Professional animator
        </li>
        <li>
          <span>
            <CheckMark />
          </span>
          Background music
        </li>
      </CardList>
    </Card>
  </CardContainer>
)

export default PackagesCard
