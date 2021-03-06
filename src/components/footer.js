import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { ParagraphStyle } from './styles/TextStyles'
import { device } from './styles/MediaQueries'
import FooterLogo from '../images/videobird-logo.png'

const FooterWrapper = styled.footer`
  width: 100%;
  padding: ${props => props.theme.textSpace} 0;
  background: ${props => props.theme.primary};
  color: #fff;
  h2 {
    :after {
      content: '';
      height: 1px;
      width: 150px;
      margin: 1.5rem auto 0 auto;
      background: ${props => props.theme.secondaryLight};
      display: block;
    }
  }
`

const FooterContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    color: ${props => props.theme.lightGrey};
    margin-top: ${props => props.theme.textSpace};
  }
`

const FooterLink = styled(Link)`
  margin-bottom: ${props => props.theme.textSpace};
`

const FooterLogoStyle = styled.img`
  width: 20rem;
`

const FooterNavList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};
  list-style: none;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

const FooterNavItem = styled.li`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  a {
    color: #fff;
    transition: ease 0.2s;
    :hover {
      color: ${props => props.theme.CTAHover};
    }
  }
`

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <FooterLink to="/">
        <FooterLogoStyle src={FooterLogo} alt="SEOBird logo" />
      </FooterLink>
      <nav>
        <FooterNavList>
          <FooterNavItem>
            <Link to="/#portfolio">Portfolio</Link>
          </FooterNavItem>
          <FooterNavItem>
            <Link to="/#process">Process</Link>
          </FooterNavItem>
          <FooterNavItem>
            <Link to="/#reviews">Reviews</Link>
          </FooterNavItem>
          <FooterNavItem>
            <Link to="/#pricing">Pricing</Link>
          </FooterNavItem>
          <FooterNavItem>
            <Link to="/#faq">FAQ</Link>
          </FooterNavItem>
          <FooterNavItem>
            <Link to="/#pricing">Order</Link>
          </FooterNavItem>
        </FooterNavList>
      </nav>
      <ParagraphStyle>&copy; 2019 VideoBird</ParagraphStyle>
    </FooterContainer>
  </FooterWrapper>
)

export default Footer
