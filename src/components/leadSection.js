import React from 'react'
import styled from 'styled-components'
import { FaRegChartBar } from 'react-icons/fa'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
} from './styles/TextStyles'
import { device } from './styles/MediaQueries'

const LeadSectionWrapper = styled.div`
  position: relative;
  width: 100%;
`

const LeadBgIcon = styled(FaRegChartBar)`
  position: absolute;
  top: 50%;
  left: 50%;
  fill: rgba(0, 0, 0, 0.05);
  font-size: 50rem;
  transform: translate(-50%, -50%);
`

const LeadSectionContainer = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.sectionSpace} 0;

  @media ${device.tabletL} {
    width: 80%;
    margin: 0 auto;
  }

  @media ${device.tablet} {
    width: 95%;
    margin: 0 auto;
  }
`

const LeadSectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`

const LeadSection = () => (
  <LeadSectionWrapper>
    <LeadBgIcon />
    <LeadSectionContainer>
      <HeadingStyle>Outsource your content</HeadingStyle>
      <LeadSectionGrid>
        <div>
          <SubHeadingStyle>Ensure Content Quality</SubHeadingStyle>
          <ParagraphStyle>
            Outsourcing your content does not mean there is a loss in quality.
            If the topic is thoroughly researched, someone who is proficient in
            content creation will produce high quality work.
          </ParagraphStyle>
        </div>
        <div>
          <SubHeadingStyle>Save Precious Time</SubHeadingStyle>
          <ParagraphStyle>
            Spending hours upon hours each week creating content is not
            feesible. For business owners, putting time into something other
            than running their business is daunting and demotivating.
          </ParagraphStyle>
        </div>
      </LeadSectionGrid>
    </LeadSectionContainer>
  </LeadSectionWrapper>
)

export default LeadSection
