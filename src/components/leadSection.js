import React from 'react'
import styled from 'styled-components'
import { FaRegChartBar } from 'react-icons/fa'
import { HeadingStyle } from './styles/TextStyles'
import { device } from './styles/MediaQueries'
import Toggle from './toggle'
import Modal from './modal'

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
  z-index: 1;
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
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`

const LeadSection = () => (
  <LeadSectionWrapper id="portfolio">
    <LeadBgIcon />
    <LeadSectionContainer>
      <HeadingStyle>A few of the videos we have done</HeadingStyle>
      <LeadSectionGrid>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <button type="button" onClick={toggle}>
                Video
              </button>
              <Modal on={on} toggle={toggle}>
                <p>insert yt vid</p>
              </Modal>
            </>
          )}
        </Toggle>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <button type="button" onClick={toggle}>
                Video
              </button>
              <Modal on={on} toggle={toggle}>
                <p>insert yt vid</p>
              </Modal>
            </>
          )}
        </Toggle>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <button type="button" onClick={toggle}>
                Video
              </button>
              <Modal on={on} toggle={toggle}>
                <p>insert yt vid</p>
              </Modal>
            </>
          )}
        </Toggle>
      </LeadSectionGrid>
    </LeadSectionContainer>
  </LeadSectionWrapper>
)

export default LeadSection
