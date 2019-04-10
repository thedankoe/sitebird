import React from 'react'
import { CheckMark } from './styles/IconStyles'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
} from './styles/TextStyles'
import {
  CardContainer,
  Card,
  CardParagraph,
  CardList,
  CardLink,
} from './servicesCard'

const LandingPageCard = () => (
  <CardContainer>
    <Card>
      <HeadingStyle>Landing Page</HeadingStyle>
      <SubHeadingStyle>
        For businesses that are tight on time and understand the need for SEO.
      </SubHeadingStyle>
      <CardParagraph>
        $599/month <span>plus tax</span>
      </CardParagraph>
      <ParagraphStyle>
        Month to Month - <span>Done For You</span>
      </ParagraphStyle>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          Problems that will most increase growth when fixed are prioritized
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          We do the work for you, you sit back and enjoy your online growth
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Bi-weekly content writing, daily Facebook posts, and copywriting for
          all pages included
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          A monthly strategy and ROI report describing how we plan to continue
          growth
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Email marketing can be added on at anytime, this is an option when
          purchasing
        </li>
      </CardList>
      <CardLink to="/services/standard">Checkout</CardLink>
    </Card>
  </CardContainer>
)

export default LandingPageCard
