import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'

export const VidContainer = styled.div`
  width: 100%;
`

export const VidIframe = styled.iframe`
  width: 100%;
  height: 550px;

  @media ${device.laptopL} {
    height: 400px;
  }

  @media ${device.tabletS} {
    height: 255px;
  }

  @media ${device.mobileL} {
    height: 225px;
  }
`

const IntroVideo = () => (
  <VidContainer>
    <VidIframe
      src="https://www.youtube.com/embed/_jlORd36LGI?rel=0"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </VidContainer>
)

export default IntroVideo
