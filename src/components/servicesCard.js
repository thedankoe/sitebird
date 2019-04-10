import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import { CheckMark } from './styles/IconStyles'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  HeaderLinkStyle,
} from './styles/TextStyles'

export const CardContainer = styled.div`
  width: 100%;
  margin: ${props => props.theme.textSpace} 0;
  display: flex;
  justify-content: center;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
  }
`

export const Card = styled.div`
  width: 50%;
  background: #fff;
  padding: ${props => props.theme.textSpace} 1.5rem;
  border-radius: 3px;
  box-shadow: ${props => props.theme.bs};
  color: #000;
  :not(:last-child) {
    margin-right: ${props => props.theme.textSpace};
  }

  @media ${device.laptop} {
    width: 70%;
    :not(:last-child) {
      margin-right: 0;
      margin-bottom: ${props => props.theme.textSpace};
    }
  }

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.tabletS} {
    width: 95%;
  }
`

export const CardParagraph = styled.p`
  color: ${props => props.theme.primary};
  font-size: 2.8rem;
  font-weight: 500;
`

export const CardList = styled.ul`
  width: 80%;
  margin: ${props => props.theme.textSpace} auto;
  border-radius: 3px;
  list-style: none;
  font-size: 2rem;
  font-weight: 400;
  svg {
    margin-right: 2rem;
    font-size: 3rem;
  }
  li {
    display: flex;
    align-items: center;
    text-align: left;
    :not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  @media ${device.tabletS} {
    width: 95%;
  }
`

export const CardLink = styled(HeaderLinkStyle)`
  margin: 0 auto;
`

const ServicesCard = () => (
  <CardContainer>
    <Card>
      <HeadingStyle>Single Page</HeadingStyle>
      <SubHeadingStyle>
        A modern website style with all content beautifully displayed on one
        page.
      </SubHeadingStyle>
      <CardParagraph>$499 flat fee</CardParagraph>
      <ParagraphStyle>Or</ParagraphStyle>
      <CardParagraph>$119/month</CardParagraph>
      <ParagraphStyle>6 month contract</ParagraphStyle>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          Optimized for SEO, mobile, usability, and accessability.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Designed for your business. Includes an email capture input and
          contact form.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Includes most aspects of a multi-page site organized on a single page
          that flows well.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Ability to add on pages or functionality at any time after website
          completion at an affordable price.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Revisions for 1 month after website completion. We want you to
          completely satisfied.
        </li>
      </CardList>
      <CardLink to="/websites/single-page">Learn More</CardLink>
    </Card>
    <Card>
      <HeadingStyle>Multi Page</HeadingStyle>
      <SubHeadingStyle>
        5 pages are included. Great for businesses that want the traditional
        website feel.
      </SubHeadingStyle>
      <CardParagraph>$999 flat fee</CardParagraph>
      <ParagraphStyle>Or</ParagraphStyle>
      <CardParagraph>$199/month</CardParagraph>
      <ParagraphStyle>6 month contract</ParagraphStyle>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          Optimized for SEO, mobile, usability, and accessability.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Designed for your business. Includes an email capture input and
          contact form.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          5 custom pages. Traditionally these are the home, contact, about, FAQ,
          and services.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Ability to add on pages or functionality at any time after website
          completion at an affordable price.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Revisions for 1 month after website completion. We want you to
          completely satisfied.
        </li>
      </CardList>
      <CardLink to="/websites/multi-page">Learn More</CardLink>
    </Card>
  </CardContainer>
)

export default ServicesCard
