import React from 'react'
import styled, { keyframes } from 'styled-components'
import {
  TiMicrophoneOutline,
  TiPencil,
  TiNotesOutline,
  TiMediaPlayOutline,
} from 'react-icons/ti'
import { device } from './styles/MediaQueries'
import { SubHeadingStyleLight, ParagraphStyleLight } from './styles/TextStyles'

const playAnimation = keyframes`
  0% {
    transform: translateX(-0.5rem);
  }

  50% {
    transform: translateX(0.5rem);
  }
  
  100% {
    transform: translateX(-0.5rem);
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

const danceAnimation = keyframes`
  0% {
    transform: translate(-1rem, 0);
  }

  15% {
    transform: translate(0, -1rem);
  }
  
  50% {
    transform: translate(1rem, 0);
  }
  
  85% {
    transform: translate(0, -1rem);
  }
  
  100% {
    transform: translate(-1rem, 0);
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
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`

export const InfoBlock = styled.div`
  text-align: center;
`

const MicIcon = styled(TiMicrophoneOutline)`
  fill: #fff;
  font-size: 7rem;
  animation: ${growAnimation} 2s infinite;
`

const CopywritingIcon = styled(TiPencil)`
  fill: #fff;
  font-size: 7rem;
  animation: ${swayAnimation} 2s infinite;
`

const PlayIcon = styled(TiMediaPlayOutline)`
  fill: #fff;
  font-size: 7rem;
  animation: ${playAnimation} 1s infinite;
`

const MusicIcon = styled(TiNotesOutline)`
  fill: #fff;
  font-size: 7rem;
  animation: ${danceAnimation} 2s infinite;
`

const InfoSection = () => (
  <InfoWrapper>
    <InfoContainer>
      <InfoBlock>
        <PlayIcon />
        <SubHeadingStyleLight>Beautiful Animation</SubHeadingStyleLight>
        <ParagraphStyleLight>
          We thoroughly research topics and keywords to ensure maximum
          engagement.
        </ParagraphStyleLight>
      </InfoBlock>
      <InfoBlock>
        <MicIcon />
        <SubHeadingStyleLight>Fluent Voiceover</SubHeadingStyleLight>
        <ParagraphStyleLight>
          We use professional, native speaking, american english voice. No
          pre-recordings.
        </ParagraphStyleLight>
      </InfoBlock>
      <InfoBlock>
        <CopywritingIcon />
        <SubHeadingStyleLight>Simple Scripts</SubHeadingStyleLight>
        <ParagraphStyleLight>
          Simple and readable writing converts more. Complexity drives viewers
          away.
        </ParagraphStyleLight>
      </InfoBlock>
      <InfoBlock>
        <MusicIcon />
        <SubHeadingStyleLight>Background Music</SubHeadingStyleLight>
        <ParagraphStyleLight>
          We set the mood and scene of the animation with matching background
          music.
        </ParagraphStyleLight>
      </InfoBlock>
    </InfoContainer>
  </InfoWrapper>
)

export default InfoSection
