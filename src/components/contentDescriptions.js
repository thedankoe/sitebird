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
        <BlogPostDescription />
        <div>
          <SubHeadingStyle>Blog Posts</SubHeadingStyle>
          <DescriptionList>
            <li>
              <span>
                <CheckMark />
              </span>
              1000 words minimum per article, the perfect amount to include
              keywords and links for SEO.
            </li>
            <li>
              <span>
                <CheckMark />
              </span>
              Thoroughly research topics and keywords to ensure engagement and
              organic ranking.
            </li>
            <li>
              <span>
                <CheckMark />
              </span>
              Conversion centered writing that persuades the user to make a
              purchase or click through a CTA.
            </li>
            <li>
              <span>
                <CheckMark />
              </span>
              SEO optimized to ensure steady organic growth for keywords that
              you can ACTUALLY rank for.
            </li>
          </DescriptionList>
        </div>
      </CaseContainer>
    </DescriptionWrapper>
    <DescriptionWrapper>
      <CaseContainer>
        <SocialPostDescription />
        <div>
          <SubHeadingStyle>Social Posts</SubHeadingStyle>
          <DescriptionList>
            <li>
              <span>
                <CheckMark />
              </span>
              75-100 professionally written to convert. Perfect for offers,
              special events, and bragging about your awesome products.
            </li>
            <li>
              <span>
                <CheckMark />
              </span>
              Competitor and 'hot topic' research to ensure views and engagement
            </li>
            <li>
              <span>
                <CheckMark />
              </span>
              Beautifully designed graphics. These convert exponentially more
              than normal images.
            </li>
            <li>
              <span>
                <CheckMark />
              </span>
              Designed to be posted on any or all platforms for maximum
              conversion and efficiency.
            </li>
          </DescriptionList>
        </div>
      </CaseContainer>
      <DescriptionParagraph>
        After checkout you will be redirected to a form where you can choose
        topics and tell us more about your business.
      </DescriptionParagraph>
    </DescriptionWrapper>
  </>
)

export default ContentDescription
