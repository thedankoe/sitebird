import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { device } from './styles/MediaQueries'
import {
  HeadingStyle,
  ParagraphStyle,
  ParagraphStyleLight,
  ProblemLink,
  HeadingStyleLight,
} from './styles/TextStyles'
import { RightIcon, CrossIcon } from './styles/IconStyles'
import LeadSection from './leadSection'
import InfoSection from './infoSection'
import PrismTexture from '../images/prism-texture.png'

const PROBLEM_QUERY = graphql`
  query ProblemQuery {
    file(relativePath: { eq: "websites-dont-convert.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ProblemWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;
  text-align: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.tabletS} {
    text-align: left;
  }
`

const ProblemContainer = styled.div`
  padding: 0 0 ${props => props.theme.textSpace} 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }

  div {
    p {
      text-align: left;
    }
  }
`

const ProblemImg = styled(Img)`
  box-shadow: ${props => props.theme.bs};
  border-radius: 5px;
`

export const WrapperBlue = styled.div`
  width: 100%;
  margin: 0;
  padding: ${props => props.theme.textSpace} 0;
  background-image: url(${PrismTexture});
  color: #fff;

  h2 {
    @media ${device.laptopL} {
      text-align: center;
      :after {
        margin: 1.5rem auto 0 auto;
      }
    }
  }
`

const ProbContainerBlue = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  text-align: center;

  h2 {
    @media ${device.tabletS} {
      text-align: left;
      :after {
        margin: 1.5rem 0 0 0;
      }
    }
  }

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

export const ParagraphSecondary = styled(ParagraphStyle)`
  margin-top: ${props => props.theme.textSpace};
  color: ${props => props.theme.secondary};
  font-weight: 500;
  text-align: left;

  @media ${device.tabletS} {
    text-align: left;
  }
`

const ParagraphBlue = styled(ParagraphStyle)`
  color: #fff;
  margin-bottom: ${props => props.theme.textSpace};
  text-align: center;

  @media ${device.tabletS} {
    text-align: left;
  }
`

const ProblemList = styled.ul`
  width: 70%;
  margin: 0 auto ${props => props.theme.textSpace} auto;
  padding: ${props => props.theme.textSpace} 1.5rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 3px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.tabletS} {
    width: 100%;
    align-items: flex-start;
  }
`

const ProblemListItem = styled.li`
  font-size: 2rem;
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
  div {
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const ProblemSolution = () => (
  <StaticQuery
    query={PROBLEM_QUERY}
    render={data => (
      <>
        <ProblemWrapper>
          <HeadingStyle>Quality content takes time and skill</HeadingStyle>
          <ProblemContainer>
            <div>
              <ParagraphStyle>
                Creating content is a huge problem for business owners. They
                know they need to consistently write blog posts, craft social
                media images, write engaging content for those social media
                posts, and so on.
              </ParagraphStyle>
              <ParagraphSecondary>
                Creating engaging content is the backbone of a businesses online
                presence. Having a business to run makes content creation a
                drag.
              </ParagraphSecondary>
            </div>
            <ProblemImg fluid={data.file.childImageSharp.fluid} />
          </ProblemContainer>
        </ProblemWrapper>
        <WrapperBlue>
          <ProbContainerBlue>
            <HeadingStyleLight>
              No targeted content, no customers
            </HeadingStyleLight>
            <ParagraphBlue>
              A web presence without targeted content is like a business without
              customers. Simply throwing some content together will only go so
              far. Here's the results of not optimizing your online presence:
            </ParagraphBlue>
            <ProblemList>
              <ProblemListItem>
                <div>
                  <CrossIcon />
                </div>
                <span>
                  Wasting money on services that aren't bringing in customers
                </span>
              </ProblemListItem>
              <ProblemListItem>
                <div>
                  <CrossIcon />
                </div>
                <span>Losing money trying to make current customers happy</span>
              </ProblemListItem>
              <ProblemListItem>
                <div>
                  <CrossIcon />
                </div>
                <span>Closing your business as fast as you started it</span>
              </ProblemListItem>
              <ProblemListItem>
                <div>
                  <CrossIcon />
                </div>
                <span>Inability to grow past a certain point</span>
              </ProblemListItem>
              <ProblemListItem>
                <div>
                  <CrossIcon />
                </div>
                <span>Zero or very little NEW customers</span>
              </ProblemListItem>
            </ProblemList>
            <ParagraphStyleLight>
              Worst case scenario: you don't scale, you lose a lot of money, and
              you restart.
            </ParagraphStyleLight>
          </ProbContainerBlue>
        </WrapperBlue>
        <LeadSection />
        <WrapperBlue>
          <HeadingStyleLight>How we can help</HeadingStyleLight>
          <InfoSection />
          <ProblemLink to="/services">
            Detail on our services
            <RightIcon />
          </ProblemLink>
        </WrapperBlue>
      </>
    )}
  />
)

export default ProblemSolution
