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

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 95%;
  }
`

export const CaseContainer = styled.div`
  margin-bottom: ${props => props.theme.textSpace};
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
    span {
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
        <HeadingStyle>Content Marketing Overview</HeadingStyle>
        <CaseContainer>
          <CaseImg fluid={data.file.childImageSharp.fluid} />
          <ParagraphContainer>
            <SubHeadingStyle>
              Business owners understand how necessary it is to produce content,
              but many found themselves with these problems:
            </SubHeadingStyle>
            <CaseList style={{ marginBottom: '2rem' }}>
              <li>
                <span>65%</span> find it challenging to produce engaging content
              </li>
              <li>
                <span>62%</span> don't know how to measure the ROI of their
                campaigns
              </li>
              <li>
                <span>60%</span> say that they can't produce content
                consistently
              </li>
            </CaseList>
            <SubHeadingStyle>
              Here's some stats from Twitter themselves on content marketing.
            </SubHeadingStyle>
            <CaseList>
              <li>
                <span>66%</span> of people have found a new business on Twitter
              </li>
              <li>
                <span>69%</span> of people bought something because of a tweet
              </li>
              <li>
                <span>94%</span> plan to make a purchase from a business they
                follow.
              </li>
            </CaseList>
          </ParagraphContainer>
        </CaseContainer>
        <CaseParagraph>
          These statistics more or less account for all social platforms and
          blogs. The main point is that{' '}
          <span>you need to consistently post great content</span>
        </CaseParagraph>
      </CaseWrapper>
    )}
  />
)

export default CaseStudy
