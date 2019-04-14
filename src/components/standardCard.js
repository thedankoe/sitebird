import React from 'react'
import styled from 'styled-components'
import { CheckMark } from './styles/IconStyles'
import {
  SubHeadingStyle,
  ParagraphStyle,
  CheckoutLink,
} from './styles/TextStyles'
import { CardContainer, Card, CardParagraph, CardList } from './servicesCard'
import { PreviousPrice } from './packagesCard'

const StandardCard = () => (
  <CardContainer>
    <Card>
      <PreviousPrice>$497</PreviousPrice>
      <CardParagraph>$397</CardParagraph>
      <ParagraphStyle>flat fee - 14 to 18 day delivery</ParagraphStyle>
      <CheckoutLink blue to="/services/basic">
        Order Now
      </CheckoutLink>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          2 conversion centered and SEO optimized content articles (blog posts).
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          <div>
            10 professionally designed social media posts{' '}
            <strong>with content and images</strong>.
          </div>
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Kickstart your online presence with researched keywords that will grow
          organic traffic and leads.
        </li>
      </CardList>
    </Card>
    <Card>
      <PreviousPrice>$897</PreviousPrice>
      <CardParagraph>$697</CardParagraph>
      <ParagraphStyle>flat fee - 21 to 25 day delivery</ParagraphStyle>
      <CheckoutLink to="/services/basic">Order Now</CheckoutLink>
      <ParagraphStyle>Best Seller</ParagraphStyle>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          4 conversion centered and SEO optimized content articles (blog posts).
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          <div>
            20 professionally designed social media posts{' '}
            <strong>with content and images</strong>.
          </div>
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Kickstart your online presence with researched keywords that will grow
          organic traffic and leads.
        </li>
      </CardList>
    </Card>
    <Card>
      <PreviousPrice>$1247</PreviousPrice>
      <CardParagraph>$947</CardParagraph>
      <ParagraphStyle>flat fee - 1 month delivery</ParagraphStyle>
      <CheckoutLink blue to="/services/basic">
        Order Now
      </CheckoutLink>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          6 conversion centered and SEO optimized content articles (blog posts).
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          <div>
            30 professionally designed social media posts{' '}
            <strong>with content and images</strong>.
          </div>
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Kickstart your online presence with researched keywords that will grow
          organic traffic and leads.
        </li>
      </CardList>
    </Card>
  </CardContainer>
)

export default StandardCard
