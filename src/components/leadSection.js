import React from 'react'
import styled from 'styled-components'
import { FaRegChartBar } from 'react-icons/fa'
import { HeadingStyle } from './styles/TextStyles'
import { device } from './styles/MediaQueries'
import Toggle from './toggle'
import Modal from './modal'
import CavemanThumbnail from '../images/caveman-portfolio-thumbnail.jpg'
import MatressGuruThumbnail from '../images/mattress-guru-thumbnail.jpg'
import PerfectMoversThumbnail from '../images/perfect-movers-thumbnail.jpg'
import { PlayIcon } from './styles/IconStyles'
import { VidContainer, VidIframe } from './introVideo'

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
  width: 75%;
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

const PortfolioThumbnail = styled.button`
  height: 30rem;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url(${props => props.thumbnail});
  background-size: cover;
  background-position: center;
  border: none;
  border-radius: 6px;
  box-shadow: ${props => props.theme.bs};
  cursor: pointer;
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
              <PortfolioThumbnail
                thumbnail={MatressGuruThumbnail}
                type="button"
                onClick={toggle}
              >
                <PlayIcon />
              </PortfolioThumbnail>
              <Modal on={on} toggle={toggle}>
                <VidContainer>
                  <VidIframe
                    src="https://www.youtube.com/embed/57hukFP47Do?rel=0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </VidContainer>
              </Modal>
            </>
          )}
        </Toggle>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <PortfolioThumbnail
                thumbnail={PerfectMoversThumbnail}
                type="button"
                onClick={toggle}
              >
                <PlayIcon />
              </PortfolioThumbnail>
              <Modal on={on} toggle={toggle}>
                <VidContainer>
                  <VidIframe
                    src="https://www.youtube.com/embed/_J_h4_Bp7sU?rel=0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </VidContainer>
              </Modal>
            </>
          )}
        </Toggle>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <PortfolioThumbnail
                thumbnail={CavemanThumbnail}
                type="button"
                onClick={toggle}
              >
                <PlayIcon />
              </PortfolioThumbnail>
              <Modal on={on} toggle={toggle}>
                <VidContainer>
                  <VidIframe
                    src="https://www.youtube.com/embed/2jszFCpu1pA?rel=0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </VidContainer>
              </Modal>
            </>
          )}
        </Toggle>
      </LeadSectionGrid>
    </LeadSectionContainer>
  </LeadSectionWrapper>
)

export default LeadSection
