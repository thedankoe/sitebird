import React from 'react'
import styled from 'styled-components'
import { GoStar } from 'react-icons/go'
import { ParagraphStyle } from './styles/TextStyles'
import { device } from './styles/MediaQueries'

const TestimonialWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto ${props => props.theme.sectionSpace} auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

export const TestimonialContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const RatingContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
`

export const RatingIcon = styled(GoStar)`
  font-size: 3rem;
  fill: ${props => props.theme.tertiary};
`

export const TestimonialParagraph = styled(ParagraphStyle)`
  font-style: italic;
  span {
    display: block;
    margin-top: 1rem;
    font-style: normal;
    color: ${props => props.theme.secondary};
  }
`

export const VerifiedPurchase = styled(ParagraphStyle)`
  color: ${props => props.theme.warning};
`

const TestimonialSection = () => (
  <TestimonialWrapper>
    <TestimonialContainer>
      <RatingContainer>
        <RatingIcon />
        <RatingIcon />
        <RatingIcon />
        <RatingIcon />
        <RatingIcon />
      </RatingContainer>
      <VerifiedPurchase>Verified Purchase</VerifiedPurchase>
      <TestimonialParagraph>
        "They made sure our website was optimized before we purchased blog
        posts, the writing quality is amazing!"
        <span>Brittany</span>
      </TestimonialParagraph>
    </TestimonialContainer>
    <TestimonialContainer>
      <RatingContainer>
        <RatingIcon />
        <RatingIcon />
        <RatingIcon />
        <RatingIcon />
        <RatingIcon />
      </RatingContainer>
      <VerifiedPurchase>Verified Purchase</VerifiedPurchase>
      <TestimonialParagraph>
        "Great articles and posts, will be buying again. Our website traffic has
        been steadily going up!"
        <span>Skip &amp; Angee</span>
      </TestimonialParagraph>
    </TestimonialContainer>
  </TestimonialWrapper>
)

export default TestimonialSection
