import React from 'react'
import styled from 'styled-components'
import { SubHeadingStyle, ParagraphStyle } from './styles/TextStyles'
import { CaseContainer } from './caseStudy'
import { CheckMark } from './styles/IconStyles'
import SocialPostDescription from './lazy-images/social-post-description'
import BlogPostDescription from './lazy-images/blog-post-description'

const DescriptionWrapper = styled.div`
  margin-bottom: ${props => props.theme.sectionSpace};
`

const DescriptionList = styled.ul`
  list-style: none;
  font-size: 2rem;
  font-weight: 500;

  svg {
    margin-right: 1.5rem;
    font-size: 3rem;
  }

  li {
    display: flex;
    align-items: center;

    :not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`

const DescriptionParagraph = styled(ParagraphStyle)`
  font-weight: 700;
`

const ContentDescription = () => (
  <>
    <DescriptionWrapper>
      <CaseContainer>
        <div>
          <SubHeadingStyle style={{ textAlign: 'center' }}>
            Whats Included
          </SubHeadingStyle>
          <DescriptionList>
            <li>
              <span>
                <CheckMark />
              </span>
              30-90 second video. Choose a length that will fit all of the
              information in about your topic.
            </li>
            <li>
              <span>
                <CheckMark />
              </span>
              Experienced script writing that effectively gets your videos point
              across.
            </li>
            <li>
              <span>
                <CheckMark />
              </span>
              Professionally recorded male or female voiceover. We work with
              only experienced voiceover creators.
            </li>
            <li>
              <span>
                <CheckMark />
              </span>
              Professionally animated video that flows with the voiceover and
              other elements.
            </li>
          </DescriptionList>
        </div>
        <div>
          <SubHeadingStyle style={{ textAlign: 'center' }}>
            Uses For Videos
          </SubHeadingStyle>
          <DescriptionList>
            <li>
              <span>
                <CheckMark />
              </span>
              On your website or landing pages. Make sales, get opt ins, or get
              your point across.
            </li>
            <li>
              <span>
                <CheckMark />
              </span>
              Advertising. Videos outperform image and text ads. Use on
              Facebook, YouTube, Instagram, etc.
            </li>
            <li>
              <span>
                <CheckMark />
              </span>
              Meetings. Perfect for introduction in sales meetings. A video is
              pitch perfect everytime compared to human error.
            </li>
            <li>
              <span>
                <CheckMark />
              </span>
              Conferences. Get in front of more people and give something
              visitors can have fun with.
            </li>
          </DescriptionList>
        </div>
      </CaseContainer>
      <DescriptionParagraph>
        After checkout you will be redirected to a form where you can give us
        information on how to make this the best video for you.
      </DescriptionParagraph>
    </DescriptionWrapper>
  </>
)

export default ContentDescription
