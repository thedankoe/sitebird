import React from 'react'
import styled from 'styled-components'
import { FacebookShareButton, LinkedinShareButton } from 'react-share'
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti'
import { SubHeadingStyle } from './styles/TextStyles'

const ShareWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto ${props => props.theme.textSpace};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ShareContainer = styled.div`
  display: flex;
`

const FacebookIcon = styled(TiSocialFacebookCircular)`
  fill: #3b5998;
  font-size: 7rem;
  cursor: pointer;
`

const LinkedInIcon = styled(TiSocialLinkedinCircular)`
  fill: #0077b5;
  font-size: 7rem;
  cursor: pointer;
`

const ShareBlog = ({ socialConfig }) => (
  <ShareWrapper>
    <SubHeadingStyle>Share This Post</SubHeadingStyle>
    <ShareContainer>
      <FacebookShareButton url={socialConfig.config.url}>
        <FacebookIcon />
      </FacebookShareButton>
      <LinkedinShareButton
        url={socialConfig.config.url}
        title={socialConfig.config.title}
      >
        <LinkedInIcon />
      </LinkedinShareButton>
    </ShareContainer>
  </ShareWrapper>
)

export default ShareBlog
