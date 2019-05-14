import React from 'react'
import styled, { keyframes } from 'styled-components'
import Nav from './nav'
import {
  HeaderLinkStyle,
  SubHeadingStyleLight,
  ParagraphStyle,
} from './styles/TextStyles'
import { DownIcon, PlayIcon } from './styles/IconStyles'
import HeaderImg from '../images/seo-marketing-hero.jpg'
import { device } from './styles/MediaQueries'
import IntroVideo from './introVideo'
import Toggle from './toggle'
import Modal from './modal'
import IntroThumbnail from '../images/intro-video-thumbnail.jpg'
import NavHome from './navHome'

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
`

const FirstTimeOffer = styled.h3`
  width: 100%;
  font-size: 3rem;
  font-weight: 600;
  text-align: left;
  color: #fff;
  text-shadow: ${props => props.theme.ts};
  :before {
    content: '';
    height: 2px;
    width: 50%;
    margin: 3rem 0;
    background: #fff;
    display: block;

    @media ${device.desktop} {
      width: 50%;
      margin: 3rem auto;
    }
  }

  span {
    display: block;
    font-weight: 400;
    @media ${device.desktop} {
      text-align: center;
    }

    @media ${device.tablet} {
      font-size: 2.5rem;
    }

    @media ${device.tabletS} {
      font-size: 2.2rem;
    }
  }

  @media ${device.desktop} {
    text-align: center;
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

const HeaderThumbnail = styled.button`
  width: 30%;
  height: 30rem;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url(${IntroThumbnail});
  background-size: cover;
  background-position: center;
  border: none;
  border-radius: 6px;
  box-shadow: ${props => props.theme.bs};
  cursor: pointer;

  @media ${device.desktop} {
    margin-top: ${props => props.theme.sectionSpace};
    width: 50%;
  }

  @media ${device.tablet} {
    width: 70%;
  }

  @media ${device.tabletS} {
    width: 80%;
  }

  @media ${device.mobileL} {
    width: 95%;
  }
`

const HeaderHeading = styled.h1`
  font-size: 4.8rem;
  font-weight: 600;
  text-align: left;
  text-transform: capitalize;
  color: #fff;
  text-shadow: ${props => props.theme.ts};

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
    margin: 0 auto;
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
  <HeaderWrapper id="home">
    {location.pathname === '/' ? <NavHome /> : <Nav />}
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
            <FirstTimeOffer>
              First Time Customer Offer
              <span>
                <strong>$100</strong> off 30 second video, <strong>$200</strong>{' '}
                off 60 second video, <strong>$300</strong> off 90 second video.
              </span>
              <span>
                Continue to checkout as normal, there will be a link to claim
                your offer.
              </span>
            </FirstTimeOffer>
            <HeaderLink to="/#pricing">
              Claim Offer
              <DownIcon />
            </HeaderLink>
          </HeaderText>
          <Toggle>
            {({ on, toggle }) => (
              <>
                <HeaderThumbnail type="button" onClick={toggle}>
                  <PlayIcon />
                </HeaderThumbnail>
                <Modal on={on} toggle={toggle}>
                  <IntroVideo />
                </Modal>
              </>
            )}
          </Toggle>
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
