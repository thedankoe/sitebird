import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { device } from './styles/MediaQueries'
import { HeadingStyle, SubHeadingStyle } from './styles/TextStyles'

const CASE_STUDY_QUERY = graphql`
  query CaseStudyQuery {
    file(relativePath: { eq: "local-seo-case-study.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const CaseWrapper = styled.div`
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

export const CaseContainer = styled.div`
  margin: ${props => props.theme.textSpace} 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};
  text-align: left;

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`

const CaseImg = styled(Img)`
  box-shadow: ${props => props.theme.bs};
  border-radius: 5px;
`

const ParagraphContainer = styled.div`
  margin-bottom: 2rem;
`

const CaseList = styled.ul`
  list-style: none;
  color: ${props => props.theme.primaryLight};
  font-size: 2.2rem;
  font-weight: 500;

  li {
    :not(:last-child) {
      margin-bottom: ${props => props.theme.textSpace};
    }

    span {
      display: block;
      font-weight: 700;
      color: ${props => props.theme.secondary};
    }
  }
`

const CaseParagraph = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  text-align: center;

  span {
    color: ${props => props.theme.secondary};
  }
`

const CaseStudy = () => (
  <StaticQuery
    query={CASE_STUDY_QUERY}
    render={data => (
      <CaseWrapper>
        <HeadingStyle>1400% ROI</HeadingStyle>
        <SubHeadingStyle>
          A sequence of 3 videos over time built up to 1400% ROI on ad spend.
        </SubHeadingStyle>
        <CaseContainer>
          <CaseImg fluid={data.file.childImageSharp.fluid} />
          <ParagraphContainer>
            <CaseList style={{ marginBottom: '2rem' }}>
              <li>
                <span>Video 1 - Content</span> We started off with 60 seconds of
                content (no promotion) to provide value. This converts some
                viewers, but leaves many wanting more.{' '}
                <strong>This video had 800% ROI.</strong>
              </li>
              <li>
                <span>Video 2 - Promotion</span> Our audience is craving more. A
                promotional video will be well received now about how we can
                help them. Only show this video to those who watched the last.{' '}
                <strong>This video had 1200% ROI.</strong>
              </li>
              <li>
                <span>Video 3 - Testimonials / Proof</span> This video aimed to
                increase credibility and decrease perceived risk. We do this by
                showing enthusiastic testimonials in a slideshow video.{' '}
                <strong>This video had 1400% ROI.</strong>
              </li>
            </CaseList>
          </ParagraphContainer>
        </CaseContainer>
        <CaseParagraph>
          With quality and captivating video, you can achieve these results as
          well. Videos are dominating content marketing with the highest{' '}
          <span>conversion rates, engagements, and views.</span>
        </CaseParagraph>
      </CaseWrapper>
    )}
  />
)

export default CaseStudy
