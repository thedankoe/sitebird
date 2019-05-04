import React from 'react'
import styled, { keyframes } from 'styled-components'
import Nav from './nav'
import { HeaderLinkStyle } from './styles/TextStyles'
import { DownIcon } from './styles/IconStyles'
import HeaderImg from '../images/seo-marketing-hero.jpg'
import { device } from './styles/MediaQueries'
import IntroVideo from './introVideo'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-3rem);}
  to { opacity: 1; transform: translateX( 0rem);}
`

const HeaderWrapper = styled.header`
  width: 100%;
  overflow: hidden;
  background-image: linear-gradient(
      to right bottom,
      rgba(74, 116, 201, 0.8),
      rgba(70, 150, 229, 0.8)
    ),
    url(${HeaderImg});
  background-position: center;
  background-size: cover;
`

const HeaderContainer = styled.div`
  width: 95%;
  padding: ${props => props.theme.sectionSpace} 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 1s ease;

  @media ${device.desktop} {
    flex-direction: column;
  }
`

const HeaderText = styled.div`
  color: #fff;
  z-index: 2;

  @media ${device.desktop} {
    margin-bottom: ${props => props.theme.sectionSpace};

    a {
      margin: 0 auto;
    }
  }
`

const HeaderHeadingHome = styled.h1`
  width: 100%;
  font-size: 4.8rem;
  font-weight: 600;
  text-align: left;
  text-transform: capitalize;
  color: #fff;
  text-shadow: ${props => props.theme.ts};

  @media ${device.desktop} {
    text-align: center;
  }

  @media ${device.tablet} {
    font-size: 3.5rem;
  }

  @media ${device.tabletS} {
    font-size: 3.2rem;
  }

  p {
    font-size: 3rem;
    font-weight: 400;
    text-align: left;
    color: #fff;
    text-transform: none;
    display: block;

    @media ${device.tablet} {
      font-size: 2.5rem;
    }

    @media ${device.tabletS} {
      width: 90%;
      font-size: 2.2rem;
    }
  }
`

const HeaderLink = styled(HeaderLinkStyle)`
  @media ${device.tabletS} {
    align-self: flex-start;
  }
`

const HeaderHeading = styled.h1`
  font-size: 4.8rem;
  font-weight: 600;
  text-align: left;
  text-transform: capitalize;
  color: #fff;
  text-shadow: ${props => props.theme.ts};
  :after {
    content: '';
    height: 1px;
    width: 150px;
    margin: 1.5rem 0 0 auto;
    background: #fff;
    display: block;

    @media ${device.tablet} {
      margin: 1.5rem auto 0 auto;
    }

    @media ${device.tabletS} {
      margin: 1.5rem 0 0 0;
    }
  }

  @media ${device.desktop} {
    text-align: center;
  }

  @media ${device.tablet} {
    width: 100%;
    font-size: 3.5rem;
  }

  @media ${device.tabletS} {
    font-size: 3.2rem;
  }
`

const HeaderSubHeading = styled.span`
  font-size: 3rem;
  font-weight: 400;
  text-align: left;
  color: #fff;
  text-transform: none;
  display: block;

  @media ${device.desktop} {
    text-align: center;
  }

  @media ${device.tablet} {
    font-size: 2.5rem;
  }

  @media ${device.tabletS} {
    width: 90%;
    font-size: 2.2rem;
  }
`

const Header = ({ location, headerText, headerSub }) => (
  <HeaderWrapper>
    <Nav />
    <HeaderContainer>
      {location.pathname === '/' ? (
        <>
          <HeaderText>
            <HeaderHeadingHome>
              Professional animated explainer videos from $497
              <HeaderSubHeading>
                Give visitors a reason to buy before they leave, and never come
                back. High quality script, voiceover, animation, and sound.
              </HeaderSubHeading>
            </HeaderHeadingHome>
            <HeaderLink to="/#packages">
              Order Now
              <DownIcon />
            </HeaderLink>
          </HeaderText>
          <IntroVideo />
        </>
      ) : (
        <HeaderText>
          <HeaderHeading>
            {headerText}
            <HeaderSubHeading>{headerSub}</HeaderSubHeading>
          </HeaderHeading>
        </HeaderText>
      )}
    </HeaderContainer>
  </HeaderWrapper>
)

Header.defaultProps = {
  location: {},
}

export default Header
