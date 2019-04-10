import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import { CrossIcon } from './styles/IconStyles'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
} from './styles/TextStyles'

const PriceWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto ${props => props.theme.sectionSpace} auto;
  text-align: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 95%;
  }

  @media ${device.tabletS} {
    text-align: left;
  }
`

const PriceContainer = styled.ul`
  width: 45%;
  margin: ${props => props.theme.textSpace} auto 0 auto;

  @media ${device.tabletS} {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  div {
    margin: 0 auto ${props => props.theme.textSpace} auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.tabletS} {
      justify-content: flex-start;
    }

    li {
      list-style: none;
      font-size: 2.2rem;
      font-weight: 500;
    }
  }
`

const CostComparison = () => (
  <PriceWrapper>
    <HeadingStyle>Cost Comparison</HeadingStyle>
    <SubHeadingStyle>
      Web designers seem to charge quite a bit for a basic website. Sometimes
      upwards of $20,000 depending on the designer.
    </SubHeadingStyle>
    <ParagraphStyle>
      We wish we could charge you that, but we aren't thieves. Our websites are
      priced affordably for the self employed and small businesses.
    </ParagraphStyle>
    <PriceContainer>
      <div>
        <CrossIcon />
        <li>Not $10,000</li>
      </div>
      <div>
        <CrossIcon />
        <li>Not $5,000</li>
      </div>
      <div>
        <CrossIcon />
        <li>Not even $2,000</li>
      </div>
    </PriceContainer>
    <ParagraphStyle>
      Our websites start from as low as $299 paid in full.
    </ParagraphStyle>
  </PriceWrapper>
)

export default CostComparison
