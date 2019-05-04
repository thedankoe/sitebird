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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`

const LeadSection = () => (
  <LeadSectionWrapper>
    <LeadBgIcon />
    <LeadSectionContainer>
      <HeadingStyle>A few of the videos we have done</HeadingStyle>
      <LeadSectionGrid>
        <div>
          <ParagraphStyle>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur quia aut libero sunt non quam ipsa a amet corporis minus
            error voluptates, molestias quaerat, eius, quibusdam facere
            similique aspernatur id.
          </ParagraphStyle>
        </div>
        <div>
          <ParagraphStyle>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur quia aut libero sunt non quam ipsa a amet corporis minus
            error voluptates, molestias quaerat, eius, quibusdam facere
            similique aspernatur id.
          </ParagraphStyle>
        </div>
        <div>
          <ParagraphStyle>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur quia aut libero sunt non quam ipsa a amet corporis minus
            error voluptates, molestias quaerat, eius, quibusdam facere
            similique aspernatur id.
          </ParagraphStyle>
        </div>
      </LeadSectionGrid>
    </LeadSectionContainer>
  </LeadSectionWrapper>
)

export default LeadSection
