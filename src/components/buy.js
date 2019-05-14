import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';
import { device } from './styles/MediaQueries'
import { HeadingStyleLight, SubHeadingStyleLight } from './styles/TextStyles'
import PrismTexture from '../images/prism-texture.png'
import PackagesCard from './packagesCard'

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
  width: 95%;
  margin: 0 auto;

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

const Buy = () => (
  <BuyWrapper id="pricing">
    <BuyContainer>
      <HeadingStyleLight>Get started</HeadingStyleLight>
      <SubHeadingStyleLight>
        First time customers save $100-$300 off of video packages. Select your
        package and claim your offer at checkout.
      </SubHeadingStyleLight>
      <PackagesCard />
    </BuyContainer>
  </BuyWrapper>
)

export default Buy
