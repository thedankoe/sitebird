import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import { HeadingStyle, ParagraphStyle } from './styles/TextStyles'
import { PencilIcon } from './styles/IconStyles'

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

export const ProcessList = styled.ol`
  margin: ${props => props.theme.textSpace} 0
    ${props => props.theme.sectionSpace} 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProcessListContainer = styled.div`
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

export const ProcessListItem = styled.li`
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

export const ProcessListIcon = styled(PencilIcon)`
  font-size: 3rem;
  margin-right: 3rem;
  fill: #fff;
`

const Process = () => (
  <ProcessWrapper>
    <HeadingStyle>Our process</HeadingStyle>
    <ParagraphStyle>
      We offer packages that have shown great results, or offer consultations.
      Here is the process when our standard package is bought.
    </ParagraphStyle>
    <ProcessList>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Gather Necessary Information
          <span>
            A purchase is made, you will be emailed a contract to sign and a
            form to fill out with information on your buiness.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Strategy and Planning
          <span>
            We spend the first week researching keywords, competitors, and best
            conversion practices for your industry. We gather account
            information and access during this time.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Execution
          <span>
            We get to work and stay out of your hair, we create and post content
            while optimizing your website.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Monthly Review
          <span>
            We care about your money. We track specific KPIs and send a growth
            report at the end of each month.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
    </ProcessList>
    <HeadingStyle>Money Back Guarentee</HeadingStyle>
    <ParagraphStyle>
      If you are unhappy with our services within a month of your purchase (or
      before your second invoice), we give you your money back. Keep in mind
      that lead generation and organic growth takes time to compound.
    </ParagraphStyle>
  </ProcessWrapper>
)

export default Process
