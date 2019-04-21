import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import {
  HeadingStyle,
  UltraSubHeadingStyle,
  ParagraphStyle,
} from '../components/styles/TextStyles'
import { device } from '../components/styles/MediaQueries'
import SEO from '../components/seo'

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

const FAQPage = ({ location }) => (
  <Layout
    location={location}
    headerText="Frequently Asked Questions"
    headerSub="For content marketing with blog and social posts"
  >
    <SEO
      title="FAQ for Content Marketing | Blog and Social Media Posts"
      description="Have questions about us creating blog or social media posts for you? We give you all of the details here."
    />
    <FAQWrapper>
      <HeadingStyle>Your questions about content marketing</HeadingStyle>
      <FAQContainer>
        <div>
          <UltraSubHeadingStyle>
            What happens after I make my purchase and fill out the form?
          </UltraSubHeadingStyle>
          <ParagraphStyle>
            After purchase, you should receive an email from us asking if you
            have anymore topics you'd like to give us.
          </ParagraphStyle>
          <FAQParagraph>
            Once we finish your order, we send it through Google Drive ready for
            you to copy and paste into your blog or social media accounts.
          </FAQParagraph>
          <FAQParagraph>
            We provide you with best practices for posting in a separate
            document along with your order.
          </FAQParagraph>
        </div>
        <div>
          <UltraSubHeadingStyle>
            How are your products different from ones that I write or create
            myself?
          </UltraSubHeadingStyle>
          <ParagraphStyle>
            Our team is comprised of three roles: content strategist, graphic
            designer, and copywriter. All are well versed in SEO and digital
            marketing.
          </ParagraphStyle>
          <FAQParagraph>
            We understand what it takes to increase reach, engagement, and
            traffic on all of your businesses online platforms.
          </FAQParagraph>
          <FAQParagraph>
            Our services provide enterprise level content marketing at an
            extremely affordable price compared to employing someone for the
            job.
          </FAQParagraph>
        </div>
        <div>
          <UltraSubHeadingStyle>
            Why exactly should I blog?
          </UltraSubHeadingStyle>
          <ParagraphStyle>
            Think of it this way, if you write a blog post that successfully
            targets 1-2 low volume (70-200 searches a month) keywords that you
            can rank for. You can get most of that traffic to your site.
          </ParagraphStyle>
          <FAQParagraph>
            Now multiply that by 20 blog posts, you could easily secure a
            majority of the 1400-4000 users searching for your content EACH
            month over time.
          </FAQParagraph>
          <FAQParagraph>
            You can also use blog posts to share on your social accounts,
            increasing traffic even more.
          </FAQParagraph>
        </div>
        <div>
          <UltraSubHeadingStyle>
            Why should I post to social media?
          </UltraSubHeadingStyle>
          <ParagraphStyle>
            We could go over the statistics of how social media has made a shift
            in business, but here's the short explanation.
          </ParagraphStyle>
          <FAQParagraph>
            There are more people on the web and social media now more than
            ever, this is obvious. The way people find businesses has changed
            though, a large amount of people find a new business or follow
            businesses they are already customers of.
          </FAQParagraph>
          <FAQParagraph>
            People are just waiting for you to post something that they want and
            convince them to buy it.
          </FAQParagraph>
        </div>
      </FAQContainer>
    </FAQWrapper>
  </Layout>
)

export default FAQPage
