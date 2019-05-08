import React from 'react'
import styled from 'styled-components'
import {
  HeadingStyle,
  UltraSubHeadingStyle,
  ParagraphStyle,
  SubHeadingStyle,
  ColoredLink,
} from './styles/TextStyles'
import { device } from './styles/MediaQueries'

const FAQWrapper = styled.div`
  margin: ${props => props.theme.sectionSpace} 0;

  @media ${device.tabletS} {
    width: 95%;
    margin: ${props => props.theme.sectionSpace} auto;
    text-align: left;
  }
`

const FAQContainer = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

export const FAQParagraph = styled(ParagraphStyle)`
  margin-top: 1.5rem;
`

const FAQ = () => (
  <FAQWrapper id="faq">
    <HeadingStyle>Frequently Asked Questions</HeadingStyle>
    <FAQContainer>
      <div>
        <UltraSubHeadingStyle>
          What happens after I make my purchase and fill out the form?
        </UltraSubHeadingStyle>
        <ParagraphStyle>
          After purchase you will be emailed a receipt. After filling out the
          brief, you will be sent a confirmation that you can reply to with any
          additional info or assets.
        </ParagraphStyle>
        <FAQParagraph>
          After completion and revisions, we send it to you through Google
          Drive.
        </FAQParagraph>
      </div>
      <div>
        <UltraSubHeadingStyle>
          How long should my video be?
        </UltraSubHeadingStyle>
        <ParagraphStyle>
          Attention spans are getting shorter and shorter, this doesn't mean
          your video has to be short.
        </ParagraphStyle>
        <FAQParagraph>
          Your video should be as long as it needs to be to get its point
          across.
        </FAQParagraph>
        <FAQParagraph>
          Remember this, the ones that are willing to watch the video are the
          ones that are willing to buy. Focus on them.
        </FAQParagraph>
      </div>
      <div>
        <UltraSubHeadingStyle>
          How long will it take to make my video?
        </UltraSubHeadingStyle>
        <ParagraphStyle>
          This is heavily dependent on how fast you respond to us. If you give
          us feedback for revisions within 48 hours, your video will be
          completed by the delivery date calculated at checkout.
        </ParagraphStyle>
        <FAQParagraph>
          If we are doing more than 1-2 revisions for the script and animation,
          the completion date will be pushed back a bit.
        </FAQParagraph>
        <FAQParagraph>
          We try to give ample time for revisions, we are normally able to
          deliver before the calculated delivery time.
        </FAQParagraph>
      </div>
      <div>
        <UltraSubHeadingStyle>
          Will I own the rights to the video?
        </UltraSubHeadingStyle>
        <ParagraphStyle>
          Yes. Although, voiceovers are not sold, rather the right to use the
          voiceover is sold.
        </ParagraphStyle>
        <FAQParagraph>
          With that said, legally you have the right to use it anywhere you
          please. Nothing to worry about there.
        </FAQParagraph>
      </div>
    </FAQContainer>
  </FAQWrapper>
)

export default FAQ
