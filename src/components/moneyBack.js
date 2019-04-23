import React from 'react'
import styled from 'styled-components'
import { HeadingStyle, ParagraphStyle } from './styles/TextStyles'
import { PackageWrapper } from '../pages/services'
import { device } from './styles/MediaQueries'

const MoneyWrapper = styled(PackageWrapper)`
  p {
    @media ${device.tabletS} {
      text-align: left;
    }
  }
`

const MoneyBack = () => (
  <MoneyWrapper>
    <HeadingStyle>Money Back Guarentee</HeadingStyle>
    <ParagraphStyle>
      If you are unhappy with our services within a month of your purchase, we
      give you your money back.
    </ParagraphStyle>
  </MoneyWrapper>
)

export default MoneyBack
