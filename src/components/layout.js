/* eslint quotes: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from './header'
import Footer from './footer'
import { device } from './styles/MediaQueries'

const theme = {
  primary: '#262626', // rgba(38, 38, 38, 0.0);
  primaryLight: '#3D3D3D', // rgba(61, 61, 61, 0.0);
  secondary: '#4a74c9', // rgba(74, 116, 201, 0.0);
  secondaryLight: '#4696e5', // rgba(70, 150, 229, 0.0);
  tertiary: '#ff5148',
  tertiaryLight: '#ff392e', // rgba(255, 57, 46, 0.0);
  black: '#004040',
  grey: '#333',
  lightGrey: '#DDD',
  lightestGrey: '#EEE',
  success: '#55C57A',
  warning: '#FF7730',
  maxWidth: '62%',
  bs: '0 10px 18px 1px rgba(0, 0, 0, 0.2)',
  bsHover: '0 5px 10px 1px rgba(0, 0, 0, 0.3)',
  ts: '0px 3px 8px rgba(0,0,0,0.3)',
  sectionSpace: '10rem',
  textSpace: '4rem',
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    src: url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,700');
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media ${device.laptop} {
      font-size: 56.25%;
    }
    @media ${device.mobileL} {
      font-size: 50%;
    }
  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.7;
    font-family: 'Raleway', sans-serif;
  }
  a {
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
  }
  button {  font-family: 'Raleway', sans-serif; }
  ::selection {
    color: #fff;
    background: ${props => props.theme.primary};
  }
`

const Layout = ({ children, location, headerText, headerSub }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header
        location={location}
        headerText={headerText}
        headerSub={headerSub}
      />
      <main>{children}</main>
      <Footer />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
