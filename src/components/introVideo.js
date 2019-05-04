import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'

const VidContainer = styled.div`
  width: 30%;

  @media ${device.desktop} {
    width: 50%;
  }

  @media ${device.laptopL} {
    width: 70%;
  }

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`

const VidIframe = styled.iframe`
  width: 100%;
  height: 255px;

  @media ${device.desktop} {
    height: 400px;
  }

  @media ${device.tabletS} {
    height: 300px;
  }

  @media ${device.mobileL} {
    height: 255px;
  }
`

const IntroVideo = () => (
  <VidContainer>
    <VidIframe
      src="https://www.youtube.com/embed/4S4GMgona9Q?rel=0"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </VidContainer>
)

export default IntroVideo
