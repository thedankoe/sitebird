import React from 'react'
import styled from 'styled-components'
import { GoThumbsup, GoBook, GoPencil } from 'react-icons/go'
import { device } from '../components/styles/MediaQueries'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  ProblemLink,
  HeadingStyleLight,
  SubHeadingStyleLight,
  ParagraphStyleLight,
} from '../components/styles/TextStyles'
import Layout from '../components/layout'
import Buy from '../components/buy'
import { RightIcon } from '../components/styles/IconStyles'
import SEO from '../components/seo'
import { WrapperBlue } from '../components/problemSolution'
import {
  InfoWrapper,
  InfoContainer,
  InfoBlock,
} from '../components/infoSection'
import SocialMediaProof from '../components/lazy-images/social-media-proof'

export const PackageWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;
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

export const PackageContainer = styled.div`
  margin-top: ${props => props.theme.textSpace};
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

const PackageText = styled.div`
  margin-bottom: ${props => props.theme.textSpace};
`

const SocialMediaIcon = styled(GoThumbsup)`
  fill: #fff;
  font-size: 7rem;
`

const ContentIcon = styled(GoBook)`
  fill: #fff;
  font-size: 7rem;
`

const CopyIcon = styled(GoPencil)`
  fill: #fff;
  font-size: 7rem;
`

const OurWebsitesPage = ({ location }) => (
  <Layout
    location={location}
    headerText="Content marketing services"
    headerSub="Attract quality leads with zero ad spend"
  >
    <SEO title="Content Marketing Services | Blog and Social Media Posts" />
    <PackageWrapper>
      <HeadingStyle>Quality leads without bankruptcy</HeadingStyle>
      <SubHeadingStyle>
        We've studied the market, agencies are practically robbing their clients
        with mediocre results. We do not offer an outrageous monthly retainer
        promising results. We offer what has been shown to work time and time
        again.
      </SubHeadingStyle>
      <PackageContainer>
        <div>
          <SubHeadingStyle>Optimized Blog Posts</SubHeadingStyle>
          <ParagraphStyle>
            Long enough to rank well in search engines but not so long that it
            loses the readers interest. Our articles captivate the user with
            detailed imagery while focusing on SEO keywords and having a strong
            call to action.
          </ParagraphStyle>
        </div>
        <div>
          <SubHeadingStyle>Stunning Social Media Posts</SubHeadingStyle>
          <ParagraphStyle>
            Think of it as having a graphic designer make the images and a
            persuasive writer craft the content. If you have not put much effort
            into quality posts, your engagement will skyrocket.
          </ParagraphStyle>
        </div>
      </PackageContainer>
    </PackageWrapper>
    <WrapperBlue>
      <HeadingStyleLight>Services</HeadingStyleLight>
      <InfoWrapper>
        <InfoContainer>
          <InfoBlock>
            <SocialMediaIcon />
            <SubHeadingStyleLight>Social Media</SubHeadingStyleLight>
            <ParagraphStyleLight>
              We research competitors and create social media posts that engage
              and convert.
            </ParagraphStyleLight>
          </InfoBlock>
          <InfoBlock>
            <ContentIcon />
            <SubHeadingStyleLight>Content Articles</SubHeadingStyleLight>
            <ParagraphStyleLight>
              The king of organic traffic. Creating consistent, targeted,
              content through blogging results in steady growth.
            </ParagraphStyleLight>
          </InfoBlock>
          <InfoBlock>
            <CopyIcon />
            <SubHeadingStyleLight>Copywriting</SubHeadingStyleLight>
            <ParagraphStyleLight>
              Writing that captivates the reader and persuades them to take
              action on your product.
            </ParagraphStyleLight>
          </InfoBlock>
        </InfoContainer>
      </InfoWrapper>
    </WrapperBlue>
    <PackageWrapper>
      <HeadingStyle>The purpose of content</HeadingStyle>
      <SubHeadingStyle>
        Content is meant to be read, shared, and acted upon. Every single blog
        or social post should provide something of value to its user. You want
        the user to act by sharing your post or making a purchase.
      </SubHeadingStyle>
      <PackageContainer>
        <SocialMediaProof />
        <div>
          <PackageText>
            <SubHeadingStyle>Two posts, huge increases</SubHeadingStyle>
            <ParagraphStyle>
              Our customer emailed us this screenshot after purchasing a blog
              post and some social posts. At the very bottom you can see where
              they started in terms of reach and engagement on Facebook. All of
              their posts before this looked the same.
            </ParagraphStyle>
          </PackageText>
          <div>
            <SubHeadingStyle>Content is meant to be shared</SubHeadingStyle>
            <ParagraphStyle>
              Providing value in your content will cause readers to act. The
              WORST thing that could happen is that a reader simply likes the
              post, rather than sharing it and telling all of their friends
              about your product.
            </ParagraphStyle>
          </div>
        </div>
      </PackageContainer>
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <SubHeadingStyle>Still have questions? We don't bite.</SubHeadingStyle>
        <ProblemLink to="/contact">
          Contact us
          <RightIcon />
        </ProblemLink>
      </div>
    </PackageWrapper>
    <Buy />
  </Layout>
)

export default OurWebsitesPage
