import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import {
  ProblemLink,
  HeadingStyleLight,
  SubHeadingStyleLight,
} from './styles/TextStyles'
import ServicesCard from './servicesCard'
import { RightIcon } from './styles/IconStyles'
import PrismTexture from '../images/prism-texture.png'
import LandingPageCard from './landingPageCard'

export const BuyWrapper = styled.div`
  padding: ${props => props.theme.textSpace};
  background-image: url(${PrismTexture});
  text-align: center;
  color: #fff;

  @media ${device.tabletS} {
    padding-left: 0;
    padding-right: 0;
  }
`

export const BuyContainer = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  @media ${device.desktopL} {
    width: 80%;
  }

  @media ${device.desktop} {
    width: 100%;
  }

  h2 {
    ::after {
      @media ${device.tabletS} {
        margin: 1.5rem auto 0 auto;
      }
    }
    @media ${device.tabletS} {
      text-align: center;
    }
  }
`

export const BuySubHeading = styled(SubHeadingStyleLight)`
  margin: 0 auto ${props => props.theme.textSpace} auto;
`

const Buy = ({ buyText, services }) => (
  <BuyWrapper id="packages">
    <BuyContainer>
      <HeadingStyleLight>Get started</HeadingStyleLight>
      <BuySubHeading>{buyText}</BuySubHeading>
      {services ? <ServicesCard /> : <LandingPageCard />}
      <ProblemLink to="/contact">
        Request more information
        <RightIcon />
      </ProblemLink>
    </BuyContainer>
  </BuyWrapper>
)

export default Buy
