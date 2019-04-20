import React from 'react'
import styled from 'styled-components'
import {
  GoBrowser,
  GoGraph,
  GoThumbsup,
  GoBook,
  GoMailRead,
  GoDashboard,
} from 'react-icons/go'
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
import { RightIcon, CrossIcon } from '../components/styles/IconStyles'
import SEO from '../components/seo'
import { WrapperBlue } from '../components/problemSolution'
import {
  InfoWrapper,
  InfoContainer,
  InfoBlock,
} from '../components/infoSection'

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

const WebsiteCreationIcon = styled(GoBrowser)`
  fill: #fff;
  font-size: 7rem;
`

const ServicesSubHeading = styled(SubHeadingStyleLight)`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto ${props => props.theme.textSpace} auto;
  text-align: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 95%;
  }
`

const CostContainer = styled.ul`
  width: 45%;
  margin: ${props => props.theme.textSpace} auto 0 auto;

  @media ${device.tabletS} {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  div {
    margin: 0 auto ${props => props.theme.textSpace} auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.tabletS} {
      justify-content: flex-start;
    }

    li {
      list-style: none;
      font-size: 2.2rem;
      font-weight: 500;
    }
  }
`

const WebsiteOptimizationIcon = styled(GoGraph)`
  fill: #fff;
  font-size: 7rem;
`

const SocialMediaIcon = styled(GoThumbsup)`
  fill: #fff;
  font-size: 7rem;
`

const ContentIcon = styled(GoBook)`
  fill: #fff;
  font-size: 7rem;
`

const AdIcon = styled(GoDashboard)`
  fill: #fff;
  font-size: 7rem;
`

const EmailIcon = styled(GoMailRead)`
  fill: #fff;
  font-size: 7rem;
`

const OurWebsitesPage = ({ location }) => (
  <Layout
    location={location}
    headerText="Content Marketing services"
    headerSub="Attract quality leads with zero ad spend"
  >
    <SEO title="Content Marketing Services for Self Employed and Small Business" />
    <PackageWrapper>
      <HeadingStyle>Quality leads without bankruptcy</HeadingStyle>
      <SubHeadingStyle>
        We've studied the market, agencies are practically robbing their clients
        with mediocre results. We offer our services to self employed
        individuals and small businesses only. Our prices reflect that.
      </SubHeadingStyle>
      <PackageContainer>
        <div>
          <SubHeadingStyle>Conversion centered approach</SubHeadingStyle>
          <ParagraphStyle>
            Oddly enough, our team finds joy from endlessly reading case
            studies. Not only does it help us do our job better, we get you
            results. Everything we do is optimized for conversion, while
            maintaining the integrity of your business.
          </ParagraphStyle>
        </div>
        <div>
          <SubHeadingStyle>Reliable support</SubHeadingStyle>
          <ParagraphStyle>
            Ever been on hold with a large company for 30 minutes listening to
            elevator music? Us too. It is one of our highest priorities to give
            you quality support. Quick, detailed email responses and even our
            personal phone numbers in case of an emergency.
          </ParagraphStyle>
        </div>
      </PackageContainer>
    </PackageWrapper>
    <WrapperBlue>
      <HeadingStyleLight>Services</HeadingStyleLight>
      <ServicesSubHeading>
        Aside from our prepackaged services, here is all that we offer. If you
        request a consultation, we create a custom package for your business.
      </ServicesSubHeading>
      <InfoWrapper>
        <InfoContainer>
          <InfoBlock>
            <WebsiteCreationIcon />
            <SubHeadingStyleLight>Website Creation</SubHeadingStyleLight>
            <ParagraphStyleLight>
              Our conversion centered websites are completely optimized for
              usability, SEO, mobile, and performance.
            </ParagraphStyleLight>
          </InfoBlock>
          <InfoBlock>
            <WebsiteOptimizationIcon />
            <SubHeadingStyleLight>Website Optimization</SubHeadingStyleLight>
            <ParagraphStyleLight>
              Keyword research, on-page SEO, usability testing, accessability,
              and layout + call to action optimization.
            </ParagraphStyleLight>
          </InfoBlock>
          <InfoBlock>
            <SocialMediaIcon />
            <SubHeadingStyleLight>Social Media</SubHeadingStyleLight>
            <ParagraphStyleLight>
              Management of pages and accounts crucial for displaying your
              business. We offer management of all accounts as well.
            </ParagraphStyleLight>
          </InfoBlock>
          <InfoBlock>
            <ContentIcon />
            <SubHeadingStyleLight>Content Marketing</SubHeadingStyleLight>
            <ParagraphStyleLight>
              The king of organic lead generation. Creating consistent,
              targeted, content results in steady growth.
            </ParagraphStyleLight>
          </InfoBlock>
          <InfoBlock>
            <EmailIcon />
            <SubHeadingStyleLight>Email Marketing</SubHeadingStyleLight>
            <ParagraphStyleLight>
              Take advantage of your email list. Get new leads to buy and turn
              previous customers into regulars.
            </ParagraphStyleLight>
          </InfoBlock>
          <InfoBlock>
            <AdIcon />
            <SubHeadingStyleLight>Online Advertisements</SubHeadingStyleLight>
            <ParagraphStyleLight>
              Conversion centered ads that get huge returns. Not recommended
              until website and social accounts are optimized.
            </ParagraphStyleLight>
          </InfoBlock>
        </InfoContainer>
      </InfoWrapper>
      <ProblemLink to="/contact">
        Request a consultation
        <RightIcon />
      </ProblemLink>
    </WrapperBlue>
    <Buy />
  </Layout>
)

export default OurWebsitesPage
