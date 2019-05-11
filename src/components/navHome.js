import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import './styles/nav.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ToggleIcon } from './styles/IconStyles'
import Toggle from './toggle'
import NavLogo from '../images/videobird-logo.png'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(3rem);}
  to { opacity: 1; transform: translateY( 0rem);}
`

const NavWrapper = styled.div`
  position: fixed;
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 4;
`

const NavContainer = styled.nav`
  width: 50%;
  margin: 0 3rem 0 auto;
`

const Logo = styled.div`
  position: absolute;
  left: 2rem;
  top: 1.5rem;
  z-index: 10000;
`
const LogoImg = styled.img`
  width: 15rem;
`

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`

const NavItem = styled.li`
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  animation: ${fadeUp} 1s ease;
  a {
    position: relative;
    text-decoration: none;
    color: #fff;
  }
  a:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    margin-top: 5px;
    background-color: ${props => props.theme.secondaryLight};
    visibility: hidden;
    transform: scaleX(0) translateY(0.5rem);
    transition: ease 0.2s;
  }
  a:hover:before {
    visibility: visible;
    transform: scaleX(1) translateY(0.5rem);
  }
`

const NavToggleContainer = styled.nav`
  width: 100%;
`

const NavToggle = styled.button`
  position: relative;
  margin-left: auto;
  margin-right: ${props => props.theme.textSpace};
  background: none;
  z-index: 4;
  border: none;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`

const NavToggleList = styled.ul`
  position: absolute;
  top: 0;
  width: 100%;
  margin: 0;
  padding: 8rem 0 3rem 0;
  background: ${props => props.theme.primary};
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavToggleItem = styled.li`
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  border-radius: 3px;
  :not(:last-child) {
    margin-bottom: 1rem;
  }
  a {
    position: relative;
    text-decoration: none;
    color: #fff;
  }
  a:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    margin-top: 5px;
    background-color: ${props => props.theme.secondaryLight};
    visibility: hidden;
    transform: scaleX(0) translateY(0.5rem);
    transition: ease 0.2s;
  }
  a:hover:before {
    visibility: visible;
    transform: scaleX(1) translateY(0.5rem);
  }
`

class NavHome extends Component {
  state = {
    collapse: '',
  }

  componentDidMount() {
    const el = document.querySelector('.nav-wrapper')
    this.setState({ top: el.offsetTop, collapse: window.innerWidth })
    window.addEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate() {
    this.state.collapse = window.innerWidth
  }

  handleScroll = () => {
    this.setState({ scroll: window.scrollY })
  }

  render() {
    const { scroll, top, collapse } = this.state
    return (
      <NavWrapper
        className={scroll > top ? 'nav-scroll nav-wrapper' : 'nav-wrapper'}
      >
        {collapse >= 900 ? (
          <NavContainer>
            <NavList>
              <Logo>
                <AnchorLink href="#home">
                  <LogoImg src={NavLogo} alt="VideoBird logo" />
                </AnchorLink>
              </Logo>
              <NavItem>
                <AnchorLink href="#portfolio">Portfolio</AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink href="#process" offset="100">
                  Process
                </AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink href="#reviews" offset="100">
                  Reviews
                </AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink href="#pricing" offset="100">
                  Pricing
                </AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink href="#faq">FAQ</AnchorLink>
              </NavItem>
              <NavItem>
                <Link to="/contact">Contact</Link>
              </NavItem>
            </NavList>
          </NavContainer>
        ) : (
          <NavToggleContainer>
            <Logo>
              <AnchorLink href="#home">
                <LogoImg src={NavLogo} alt="VideoBird logo" />
              </AnchorLink>
            </Logo>
            <Toggle>
              {({ on, toggle }) => (
                <>
                  <NavToggle type="button" onClick={toggle}>
                    <ToggleIcon />
                  </NavToggle>
                  {on && (
                    <NavToggleList on={on} toggle={toggle}>
                      <NavToggleItem>
                        <AnchorLink href="#portfolio">Portfolio</AnchorLink>
                      </NavToggleItem>
                      <NavToggleItem>
                        <AnchorLink href="#process" offset="100">
                          Process
                        </AnchorLink>
                      </NavToggleItem>
                      <NavToggleItem>
                        <AnchorLink href="#reviews" offset="100">
                          Reviews
                        </AnchorLink>
                      </NavToggleItem>
                      <NavToggleItem>
                        <AnchorLink href="#pricing" offset="100">
                          Pricing
                        </AnchorLink>
                      </NavToggleItem>
                      <NavToggleItem>
                        <AnchorLink href="#faq" offset="100">
                          FAQ
                        </AnchorLink>
                      </NavToggleItem>
                      <NavToggleItem>
                        <Link to="/contact">Contact</Link>
                      </NavToggleItem>
                    </NavToggleList>
                  )}
                </>
              )}
            </Toggle>
          </NavToggleContainer>
        )}
      </NavWrapper>
    )
  }
}

export default NavHome