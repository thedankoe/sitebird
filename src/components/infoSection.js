import React from 'react'
import styled, { keyframes } from 'styled-components'
import { TiDeviceLaptop, TiPencil } from 'react-icons/ti'
import { GoGear } from 'react-icons/go'
import { device } from './styles/MediaQueries'
import { SubHeadingStyleLight, ParagraphStyleLight } from './styles/TextStyles'

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const swayAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(-30deg);
  }
  
  100% {
    transform: rotate(0deg);
  }
`

const growAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }
  
  100% {
    transform: scale(1);
  }
`

export const InfoWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto ${props => props.theme.textSpace} auto;
  padding: ${props => props.theme.textSpace};
  background: rgba(0, 0, 0, 0.35);
  border-radius: 3px;
  text-align: center;

  @media ${device.desktop} {
    width: 95%;
  }
`

export const InfoContainer = styled.div`
  margin-bottom: ${props => props.theme.textSpace};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`

export const InfoBlock = styled.div`
  text-align: center;
`

const LayoutIcon = styled(TiDeviceLaptop)`
  fill: #fff;
  font-size: 7rem;
  animation: ${growAnimation} 2s infinite;
`

const CopywritingIcon = styled(TiPencil)`
  fill: #fff;
  font-size: 7rem;
  animation: ${swayAnimation} 2s infinite;
`

const OptimizationIcon = styled(GoGear)`
  fill: #fff;
  font-size: 7rem;
  animation: ${spinAnimation} 3s infinite;
`

const InfoSection = () => (
  <InfoWrapper>
    <InfoContainer>
      <InfoBlock>
        <OptimizationIcon />
        <SubHeadingStyleLight>Optimized Content</SubHeadingStyleLight>
        <ParagraphStyleLight>
          We thoroughly research topics and keywords to ensure maximum
          engagement.
        </ParagraphStyleLight>
      </InfoBlock>
      <InfoBlock>
        <LayoutIcon />
        <SubHeadingStyleLight>Social Media</SubHeadingStyleLight>
        <ParagraphStyleLight>
          Social media posts with professionally designed images and
          copywriting.
        </ParagraphStyleLight>
      </InfoBlock>
      <InfoBlock>
        <CopywritingIcon />
        <SubHeadingStyleLight>Blog Posts</SubHeadingStyleLight>
        <ParagraphStyleLight>
          Targeted blog posts that are designed to persuade and get the reader
          to buy.
        </ParagraphStyleLight>
      </InfoBlock>
    </InfoContainer>
  </InfoWrapper>
)

export default InfoSection
