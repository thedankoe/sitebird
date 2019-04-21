import React from 'react'
import styled from 'styled-components'
import { GoCreditCard, GoQuestion, GoPin } from 'react-icons/go'
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

const ProcessListIcon = styled(PencilIcon)`
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

const ProcessTopicIcon = styled(GoPin)`
  font-size: 3rem;
  margin-right: 3rem;
  fill: #fff;
`

const Process = () => (
  <ProcessWrapper>
    <HeadingStyle>Our process</HeadingStyle>
    <ParagraphStyle>
      We offer packages that have shown great results, or offer consultations.
      Here is the process when a blog or social media post package has been
      purchased.
    </ParagraphStyle>
    <ProcessList>
      <ProcessListContainer>
        <div>
          <ProcessPayIcon />
        </div>
        <ProcessListItem>
          Place Your Order
          <span>Choose package, select quantity, and complete payment.</span>
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
          <ProcessTopicIcon />
        </div>
        <ProcessListItem>
          Choose Topics
          <span>
            In the brief, you may choose specific topics or list other sources
            that you use as inspiration. We give you the option to have us do
            this as well.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Review Content
          <span>
            Once we receive your brief, we create the content you ordered.
            Within the delivery time you will receive your order and can make
            revisions until you are happy.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
    </ProcessList>
    <ProblemLink to="/services">
      Detail on our services
      <RightIcon />
    </ProblemLink>
  </ProcessWrapper>
)

export default Process
