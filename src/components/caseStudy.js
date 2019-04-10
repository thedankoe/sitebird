import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { device } from './styles/MediaQueries'
import {
  HeadingStyle,
  ParagraphStyle,
  SubHeadingStyle,
} from './styles/TextStyles'

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

const CaseWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 90%;
  }
`

const CaseContainer = styled.div`
  margin-bottom: ${props => props.theme.textSpace};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

const CaseImage = styled(Img)`
  box-shadow: ${props => props.theme.bs};
  border-radius: 5px;
`

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.tabletS} {
    text-align: left;
  }
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

const CaseParagraph = styled(ParagraphStyle)`
  margin-top: ${props => props.theme.textSpace};
  color: ${props => props.theme.secondary};
  font-weight: 500;
`

const CaseStudy = () => (
  <StaticQuery
    query={CASE_STUDY_QUERY}
    render={data => (
      <CaseWrapper>
        <HeadingStyle>Website Optimization Case Studies</HeadingStyle>
        <CaseContainer>
          <CaseImage fluid={data.file.childImageSharp.fluid} />
          <ParagraphContainer>
            <SubHeadingStyle>
              Website optimization in all areas increases conversion rates
              exponentially, heres some key points:
            </SubHeadingStyle>
            <CaseList>
              <li>
                More prominent call to action - <span>591% increase</span>
              </li>
              <li>
                Updated design - <span>33% increase</span>
              </li>
              <li>
                Adding testimonials - <span>34% increase</span>
              </li>
              <li>
                Video for email signups - <span>100% increase</span>
              </li>
            </CaseList>
            <CaseParagraph>
              Optimization in all areas increases conversion rates across the
              board. Optimizing your website, or having a website built with
              optimization in mind, is important now more than ever with the
              amount of competition online.
            </CaseParagraph>
          </ParagraphContainer>
        </CaseContainer>
      </CaseWrapper>
    )}
  />
)

export default CaseStudy
