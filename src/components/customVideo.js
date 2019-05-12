import React from 'react'
import styled from 'styled-components'
import CustomImage from '../images/custom-animated-video.gif'
import { SubHeadingStyle, ParagraphStyle } from './styles/TextStyles'

const CustomWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;
`

const CustomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};
`

const CustomImg = styled.img`
  width: 100%;
  border-radius: 6px;
  box-shadow: ${props => props.theme.bs};
`

const CustomLink = styled.a`
  padding: 1.5rem;
  background: ${props => props.theme.tertiary};
  color: #fff;
  font-size: 2.2rem;
  font-weight: 500;
  border-radius: 3px;
  box-shadow: ${props => props.theme.bs};
  align-self: flex-start;
  transition: all ease 0.3s;

  :hover {
    background: ${props => props.theme.tertiaryLight};
    box-shadow: ${props => props.theme.bsHover};
    transform: translateY(0.3rem);
  }
`

const CustomVideo = () => (
  <CustomWrapper>
    <CustomContainer>
      <CustomImg src={CustomImage} alt="Custom Video Gif" />
      <div>
        <SubHeadingStyle>
          Have your own script? Need a certain length video? No voice over?
        </SubHeadingStyle>
        <ParagraphStyle style={{ marginBottom: '4rem' }}>
          Completely customize your explainer video. Don't want a voice over? No
          problem! Let's save you some money.
        </ParagraphStyle>
        <CustomLink
          href="https://dankoe.typeform.com/to/ROF3jT"
          rel="noopener noreferrer"
          target="_blank"
        >
          Get A Quote
        </CustomLink>
      </div>
    </CustomContainer>
  </CustomWrapper>
)

export default CustomVideo
