import React from 'react'
import styled from 'styled-components'
import { ParagraphStyle } from './styles/TextStyles'
import { device } from './styles/MediaQueries'
import MattressGuruTestimonial from './lazy-images/mattress-guru-testimonial'
import CavemanTestimonial from './lazy-images/caveman-testimonial'

const TestimonialWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto ${props => props.theme.sectionSpace} auto;
  display: flex;
  justify-content: space-between;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
  }
`

const TestimonialContainer = styled.div`
  width: 45%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    width: 50%;
    :not(:last-child) {
      margin-bottom: ${props => props.theme.textSpace};
    }
  }

  @media ${device.tabletS} {
    width: 80%;
  }

  @media ${device.mobileL} {
    width: 90%;
  }
`

const TestimonialImage = styled.div`
  width: 10rem;
  margin-bottom: 1rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: ${props => props.theme.bs};
`

const TestimonialParagraph = styled(ParagraphStyle)`
  font-style: italic;
  span {
    display: block;
    margin-top: 1rem;
    font-style: normal;
    color: ${props => props.theme.secondary};
  }
`

const TestimonialSection = () => (
  <TestimonialWrapper>
    <TestimonialContainer>
      <TestimonialImage>
        <MattressGuruTestimonial />
      </TestimonialImage>
      <TestimonialParagraph>
        "After reading up on build your own websites, I found SiteBird. I felt
        involved and confident throughout the process which I did not expect
        from buying a website."
        <span>Brittany - Mattress Guru</span>
      </TestimonialParagraph>
    </TestimonialContainer>
    <TestimonialContainer>
      <TestimonialImage>
        <CavemanTestimonial />
      </TestimonialImage>
      <TestimonialParagraph>
        "SiteBird optimized our current website. After only a month, our organic
        search has doubled! Highly recommended!"
        <span>Skip &amp; Angee - Caveman Printing and Apparel</span>
      </TestimonialParagraph>
    </TestimonialContainer>
  </TestimonialWrapper>
)

export default TestimonialSection
