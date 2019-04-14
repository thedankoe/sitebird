import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import {
  ProblemLink,
  HeadingStyleLight,
  SubHeadingStyleLight,
  ParagraphStyleLight,
} from './styles/TextStyles'
import ServicesCard from './servicesCard'
import { RightIcon } from './styles/IconStyles'
import PrismTexture from '../images/prism-texture.png'

const BuyWrapper = styled.div`
  padding: ${props => props.theme.textSpace};
  background-image: url(${PrismTexture});
  text-align: center;
  color: #fff;

  @media ${device.tabletS} {
    padding-left: 0;
    padding-right: 0;
  }
`

const BuyContainer = styled.div`
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

const BuySubHeading = styled(SubHeadingStyleLight)`
  margin: 0 auto ${props => props.theme.textSpace} auto;
`

const BuyWebsite = ({ buyText }) => (
  <BuyWrapper id="packages">
    <BuyContainer>
      <HeadingStyleLight>Get started</HeadingStyleLight>
      <BuySubHeading>{buyText}</BuySubHeading>
      <ParagraphStyleLight>
        These are affordable packages that have shown results in the past, they
        are not all that we offer. If you would like specific accomodations,
        request a consultation below.
      </ParagraphStyleLight>
      <ServicesCard />
      <ProblemLink to="/contact">
        Request a consultation
        <RightIcon />
      </ProblemLink>
    </BuyContainer>
  </BuyWrapper>
)

export default BuyWebsite
