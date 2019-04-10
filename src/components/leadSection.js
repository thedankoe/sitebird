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
      <HeadingStyle>Fully optimized websites guarentee growth</HeadingStyle>
      <LeadSectionGrid>
        <div>
          <SubHeadingStyle>
            300% average increase in leads for the first year
          </SubHeadingStyle>
          <ParagraphStyle>
            The point of websites are to convert, we've been over this, but it's
            extremely important to understand the difference between 'conversion
            centered' and 'showcase' websites. One is optimized in all areas,
            one isn't.
          </ParagraphStyle>
        </div>
        <div>
          <SubHeadingStyle>No targeted content, no customers</SubHeadingStyle>
          <ParagraphStyle>
            Targeted content optimizes your website for search engines. Without
            this you will not grow organically, period. Your website is meant to
            be your best salesman, targeted content helps people find you
            without you specifically directing them to it.
          </ParagraphStyle>
        </div>
      </LeadSectionGrid>
    </LeadSectionContainer>
  </LeadSectionWrapper>
)

export default LeadSection
