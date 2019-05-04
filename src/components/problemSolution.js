import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { GoCheck } from 'react-icons/go'
import { device } from './styles/MediaQueries'
import {
  HeadingStyle,
  ParagraphStyle,
  HeadingStyleLight,
  SubHeadingStyleLight,
} from './styles/TextStyles'
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
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const CheckIcon = styled(GoCheck)`
  font-size: 3rem;
  fill: ${props => props.theme.success};
`

const ProblemSolution = () => (
  <StaticQuery
    query={PROBLEM_QUERY}
    render={data => (
      <>
        <ProblemWrapper>
          <HeadingStyle>99% of people leave your website</HeadingStyle>
          <ProblemContainer>
            <div>
              <ParagraphStyle>
                Why? <strong>You didn't hook them.</strong> Attention spans are
                rapidly decreasing because users expect more. There's two
                options, complain about it or prevent your business from
                suffering.
              </ParagraphStyle>
              <ParagraphSecondary>
                Blame is often put on the user. It's not their fault that they
                weren't enticed by your product or offer. It's up to you to
                entice them.
              </ParagraphSecondary>
            </div>
            <ProblemImg fluid={data.file.childImageSharp.fluid} />
          </ProblemContainer>
        </ProblemWrapper>
        <WrapperBlue>
          <ProbContainerBlue>
            <HeadingStyleLight>
              Ensure that visitors don't leave
            </HeadingStyleLight>
            <SubHeadingStyleLight style={{ marginBottom: '2rem' }}>
              You wouldn't buy something from someone you don't trust. A
              beautiful video can do more than just build trust, it communicates
              better, it's more engaging, more memorable, and easy to share.
            </SubHeadingStyleLight>
            <ProblemList>
              <ProblemListItem>
                <div>
                  <CheckIcon />
                </div>
                <span>Increase your conversion rate</span>
              </ProblemListItem>
              <ProblemListItem>
                <div>
                  <CheckIcon />
                </div>
                <span>Seamlessly get your message across</span>
              </ProblemListItem>
              <ProblemListItem>
                <div>
                  <CheckIcon />
                </div>
                <span>Increase your perceived value</span>
              </ProblemListItem>
              <ProblemListItem>
                <div>
                  <CheckIcon />
                </div>
                <span>Rank better in Google</span>
              </ProblemListItem>
              <ProblemListItem>
                <div>
                  <CheckIcon />
                </div>
                <span>Increase demand to work with you</span>
              </ProblemListItem>
              <ProblemListItem>
                <div>
                  <CheckIcon />
                </div>
                <span>Skyrocket revenue</span>
              </ProblemListItem>
            </ProblemList>
          </ProbContainerBlue>
        </WrapperBlue>
        <LeadSection />
        <WrapperBlue>
          <HeadingStyleLight>What to expect</HeadingStyleLight>
          <InfoSection />
        </WrapperBlue>
      </>
    )}
  />
)

export default ProblemSolution
