import React from 'react'
import styled from 'styled-components'
import { HeadingStyle, SubHeadingStyle } from './styles/TextStyles'
import { device } from './styles/MediaQueries'

const OptimizationCTAWrapper = styled.div`
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

  a {
    display: block;
    width: 20rem;
    margin: ${props => props.theme.textSpace} auto 0 auto;
    padding: 1.5rem 2rem;
    background: ${props => props.theme.tertiary};
    color: #fff;
    font-size: 2.2rem;
    font-weight: 500;
    border-radius: 10rem;
    box-shadow: ${props => props.theme.bs};
    transform: translateY(0rem);
    transition: all ease 0.3s;

    :hover {
      background: ${props => props.theme.tertiaryLight};
      box-shadow: ${props => props.theme.bsHover};
      transform: translateY(0.3rem);
    }

    @media ${device.tabletS} {
      margin-left: 0;
      margin-right: 0;
      text-align: center;
    }
  }
`

const OptimizationCTA = () => (
  <OptimizationCTAWrapper>
    <HeadingStyle>Optimize your blog</HeadingStyle>
    <SubHeadingStyle>
      If your website isn't optimized, your blog won't convert as much. Fill out
      this form and we will send you a FREE website optimization checklist to
      grow your organic search traffic.
    </SubHeadingStyle>
    <a
      href="https://dankoe.typeform.com/to/thDN4h"
      rel="noopener noreferrer"
      target="_blank"
    >
      Go to Form
    </a>
  </OptimizationCTAWrapper>
)

export default OptimizationCTA
