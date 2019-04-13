import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Nav from './nav'
import { HeaderLinkStyle } from './styles/TextStyles'
import { DownIcon } from './styles/IconStyles'
import HeaderImg from '../images/seo-marketing-hero.jpg'
import { device } from './styles/MediaQueries'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-3rem);}
  to { opacity: 1; transform: translateX( 0rem);}
`

const HeaderWrapper = styled(animated.header)`
  width: 100%;
  overflow: hidden;
  background-image: linear-gradient(
      to right bottom,
      rgba(74, 116, 201, 0.95),
      rgba(70, 150, 229, 0.95)
    ),
    url(${HeaderImg});
  background-position: center;
  background-size: cover;
`

const HeaderContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 1s ease;
`

const HeaderText = styled.div`
  color: #fff;
  z-index: 2;
`

const HeaderHeadingHome = styled.h1`
  width: 65%;
  font-size: 4.8rem;
  font-weight: 500;
  text-align: left;
  text-transform: capitalize;
  color: #fff;
  text-shadow: ${props => props.theme.ts};

  @media ${device.laptopL} {
    width: 100%;
  }

  @media ${device.tablet} {
    font-size: 3.5rem;
  }

  @media ${device.tabletS} {
    font-size: 3.2rem;
  }
`

const HeaderLink = styled(HeaderLinkStyle)`
  @media ${device.tabletS} {
    align-self: flex-start;
  }
`

const HeaderHeading = styled.h1`
  font-size: 4.8rem;
  font-weight: 500;
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
  font-weight: 300;
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
`

const Header = ({ location, headerText, headerSub }) => {
  const props = useSpring({
    height: location.pathname === '/' ? 600 : 400,
    from: { height: location.pathname === '/' ? 400 : 600 },
  })
  return (
    <HeaderWrapper style={props}>
      <Nav />
      <HeaderContainer>
        {location.pathname === '/' ? (
          <HeaderText>
            <HeaderHeadingHome>
              We bring quality leads to small businesses and entrepreneurs
              <HeaderSubHeading>
                We do the heavy lifting, you enjoy the results
              </HeaderSubHeading>
            </HeaderHeadingHome>
            <HeaderLink to="/#packages">
              Start Now
              <DownIcon />
            </HeaderLink>
          </HeaderText>
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
}

Header.defaultProps = {
  location: {},
}

export default Header
