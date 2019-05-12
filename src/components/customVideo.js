import React from 'react'
import styled from 'styled-components'
import CustomImage from '../images/custom-animated-video.gif'
import { SubHeadingStyle, ParagraphStyle } from './styles/TextStyles'
import { PackageWrapper, PackageContainer } from '../pages/services'

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
  <PackageWrapper>
    <PackageContainer>
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
    </PackageContainer>
  </PackageWrapper>
)

export default CustomVideo
