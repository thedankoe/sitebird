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
      We offer different website packages to suit your businesses needs. Once a
      package is purchased, this is how you can expect the process to go:
    </ParagraphStyle>
    <ProcessList>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          We gather necessary information
          <span>
            A package is purchased, you will be emailed a contract to sign and a
            form to fill out with information on your buiness. If you pay in
            full, do not worry about a contract.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Strategy and prototyping
          <span>
            The 1-2 weeks is spent researching competitors, keywords, and
            conversion practices for your industry. We prototype the layout
            along the way. Any other vital information will be gathered at this
            time.
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
            We start building, a temporary link will be available 3 weeks after
            purchase. Questions, concerns, and revisions are taken care of for a
            1 month period after the website is finished.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Base completion
          <span>
            After the completion of the site, we implement any custom
            functionality that you purchased after your original purchase. We
            offer guidance on this.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Retainer updates and revisions
          <span>
            If you love your website (we know you will), we offer a retainer
            service for website revisions and updates. This will be offered
            after all of the original work is done. This is often times
            unnecessary, we offer transparent guidance.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
    </ProcessList>
    <HeadingStyle>Money Back Guarentee</HeadingStyle>
    <ParagraphStyle>
      If you are unhappy with our services within a month of your purcahse (or
      before the completion of a single page website), we give you your money
      back. Keep in mind that you have 1 month of revisions for any website
      package after the website is completed.
    </ParagraphStyle>
  </ProcessWrapper>
)

export default Process
