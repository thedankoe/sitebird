import React from 'react'
import { CheckMark } from './styles/IconStyles'
import { ParagraphStyle } from './styles/TextStyles'
import { CardContainer, Card, CardParagraph, CardList } from './servicesCard'
import { PreviousPrice } from './packagesCard'
import CheckoutSku from './checkoutSku'

const BulkCard = () => (
  <CardContainer>
    <Card>
      <PreviousPrice>$497</PreviousPrice>
      <CardParagraph>$397</CardParagraph>
      <ParagraphStyle>flat fee - 14 to 18 day delivery</ParagraphStyle>
      <CheckoutSku
        blue
        sku="sku_EtTbs0IIP0He7u"
        buttonText="Order Now"
        checkoutSlug="bulk-order"
      />
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
            <strong>with copy and images</strong>.
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
      <PreviousPrice>$847</PreviousPrice>
      <CardParagraph>$747</CardParagraph>
      <ParagraphStyle>flat fee - 21 to 25 day delivery</ParagraphStyle>
      <CheckoutSku
        sku="sku_EtTbKSRUkVs8CZ"
        buttonText="Order Now"
        checkoutSlug="bulk-order"
      />
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
            <strong>with copy and images</strong>.
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
      <PreviousPrice>$1197</PreviousPrice>
      <CardParagraph>$1097</CardParagraph>
      <ParagraphStyle>flat fee - 1 month delivery</ParagraphStyle>
      <CheckoutSku
        blue
        sku="sku_EtTclbODT4ckeR"
        buttonText="Order Now"
        checkoutSlug="bulk-order"
      />
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
            <strong>with copy and images</strong>.
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

export default BulkCard
