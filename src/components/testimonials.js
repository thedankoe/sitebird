import React from 'react'
import styled from 'styled-components'
import { GoStar } from 'react-icons/go'
import { ParagraphStyle } from './styles/TextStyles'
import { device } from './styles/MediaQueries'

const TestimonialWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;
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
  <TestimonialWrapper id="reviews">
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
        "Great to work with. We had a few revisions and they performed quickly.
        The quality of video was fantastic. I will be back for our next video."
        <span>Mike Personett</span>
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
        "Great quality! Describes our business better than we thought it would.
        Will happily recommend to our network."
        <span>Skip &amp; Angee Jones</span>
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
        "Excellent as always! Exactly what we asked for. Order with confidence!"
        <span>Renee</span>
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
        "We wanted a clear and simple video to describe our services which you
        succeeded with. We'll be back again!!"
        <span>Brittany Koenigslieb</span>
      </TestimonialParagraph>
    </TestimonialContainer>
  </TestimonialWrapper>
)

export default TestimonialSection
