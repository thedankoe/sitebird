import React from 'react'
import styled from 'styled-components'
import { GoCreditCard, GoQuestion } from 'react-icons/go'
import { TiDocumentText, TiMediaPlayOutline } from 'react-icons/ti'
import { device } from './styles/MediaQueries'
import { HeadingStyle, ParagraphStyle, ProblemLink } from './styles/TextStyles'
import { PencilIcon, RightIcon } from './styles/IconStyles'

const ProcessWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;
  text-align: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tabletS} {
    text-align: left;
  }
`

const ProcessList = styled.ol`
  margin: ${props => props.theme.textSpace} 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProcessListContainer = styled.div`
  width: 70%;
  padding: 1.5rem 3rem;
  background: linear-gradient(
    to right bottom,
    ${props => props.theme.secondary},
    ${props => props.theme.secondaryLight}
  );
  border-radius: 3px;
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 2rem;
  }

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.tabletS} {
    width: 95%;
  }
`

const ProcessListItem = styled.li`
  text-align: left;
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  span {
    font-size: 2.2rem;
    font-weight: 500;
    color: ${props => props.theme.lightestGrey};
    display: block;
  }
`

const ProcessVidIcon = styled(TiMediaPlayOutline)`
  font-size: 3rem;
  margin-right: 3rem;
  fill: #fff;
`

const ProcessPayIcon = styled(GoCreditCard)`
  font-size: 3rem;
  margin-right: 3rem;
  fill: #fff;
`

const ProcessQuestionIcon = styled(GoQuestion)`
  font-size: 3rem;
  margin-right: 3rem;
  fill: #fff;
`

const ProcessScriptIcon = styled(TiDocumentText)`
  font-size: 3rem;
  margin-right: 3rem;
  fill: #fff;
`

const Process = () => (
  <ProcessWrapper id="process">
    <HeadingStyle>Our process</HeadingStyle>
    <ParagraphStyle>
      We offer packages for the most common purchases. If you have specific
      requirements that are not met by our packages, contact us for an approach
      tailored to you.
    </ParagraphStyle>
    <ProcessList>
      <ProcessListContainer>
        <div>
          <ProcessPayIcon />
        </div>
        <ProcessListItem>
          Place Your Order
          <span>Choose item, select quantity, and complete payment.</span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessQuestionIcon />
        </div>
        <ProcessListItem>
          Fill Out The Brief
          <span>
            In order for us to create the right content for your business, we
            have some questions for you. This is perfect for telling us about
            your business, audience, and goals.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessScriptIcon />
        </div>
        <ProcessListItem>
          Review Script
          <span>
            Once you fill out the brief, we start writing your script. We write
            a draft, send it to you for feedback, and make changes until you are
            happy
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessVidIcon />
        </div>
        <ProcessListItem>
          Review Video
          <span>
            Once we receive the recording of the script, our animator will
            create your video. We send it over for feedback and repeat until you
            are satisfied.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
    </ProcessList>
  </ProcessWrapper>
)

export default Process
