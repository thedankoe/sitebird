/* eslint jsx-a11y/click-events-have-key-events: 0 */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { DownIcon, UpIcon } from './styles/IconStyles'
import Checkout from './checkout'
import { ParagraphStyle, SubHeadingStyle } from './styles/TextStyles'
import CardTypeImg from '../images/card-types.png'

const CheckoutCardWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 6px;
  box-shadow: ${props => props.theme.bs};
`

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`

const SelectContainer = styled.div`
  position: absolute;
  width: 100%;
  border: 2px solid ${props => props.theme.secondaryLight};
  background: #fff;
  border-radius: 3px;
  font-size: 1.8rem;
  color: ${props => props.theme.primary};
  cursor: pointer;
`

const SelectItemSelected = styled.div`
  display: inline-block;
  padding-left: 1rem;
  height: 100%;
  width: 100%;
  vertical-align: middle;
`

const SelectItems = styled.div`
  div {
    padding: 1rem;
    border-radius: 3px;
    cursor: pointer;
    transition: all ease 0.3s;
    :hover {
      background: ${props => props.theme.lightGrey};
      color: ${props => props.theme.secondary};
    }
    :focus {
      outline: 1px solid ${props => props.theme.success};
    }
  }
`

const SelectArrow = styled.div`
  position: absolute;
  top: 4px;
  right: 10%;

  svg {
    fill: ${props => props.theme.primary};
  }
`

const QuantityTable = styled.div`
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-gap: 1rem;
`

const QuantityTableHeading = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${props => props.theme.primary};
`

const QuantityTotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardsImg = styled.img`
  width: 50%;
  margin-top: 2rem;
`

const blogQuantity = [
  { value: 0, price: 0, discount: 0, delivery: 0 },
  { value: 1, price: 9700, discount: 0, delivery: 5 },
  { value: 2, price: 19400, discount: 0, delivery: 7 },
  { value: 3, price: 29100, discount: 0, delivery: 8 },
  { value: 4, price: 34800, discount: 40, delivery: 9 },
  { value: 5, price: 43500, discount: 50, delivery: 10 },
  { value: 6, price: 52200, discount: 60, delivery: 11 },
  { value: 7, price: 60900, discount: 70, delivery: 12 },
  { value: 8, price: 69600, discount: 80, delivery: 13 },
  { value: 9, price: 78300, discount: 90, delivery: 14 },
  { value: 10, price: 87000, discount: 100, delivery: 15 },
]

const socialQuantity = [
  { value: 0, price: 0, discount: 0, delivery: 0 },
  { value: 1, price: 2700, discount: 0, delivery: 2 },
  { value: 5, price: 9700, discount: 0, delivery: 5 },
  { value: 10, price: 19400, discount: 0, delivery: 7 },
  { value: 20, price: 38800, discount: 0, delivery: 10 },
  { value: 30, price: 52400, discount: 58, delivery: 12 },
  { value: 40, price: 69900, discount: 77, delivery: 14 },
]

let finalDescription = ''
let finalDelivery = ''

const CheckoutCard = () => {
  const [showBlog, setShowBlog] = useState(false)
  const [showSocial, setShowSocial] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState(blogQuantity[0])
  const [selectedSocial, setSelectedSocial] = useState(socialQuantity[0])
  const [discount, setDiscount] = useState(0)
  const [deliveryTime, setDeliveryTime] = useState(0)
  const [amount, setAmount] = useState(0)
  const [description, setDescription] = useState(
    'Select your quantity before purchasing.'
  )

  useEffect(() => {
    const calculatedAmount = () => selectedBlog.price + selectedSocial.price
    const calculatedDiscount = () =>
      selectedBlog.discount + selectedSocial.discount
    const joinDescription = () => {
      if (selectedBlog.value === 0) {
        finalDescription = `${selectedSocial.value} social media posts`
      } else if (selectedSocial.value === 0) {
        finalDescription = `${selectedBlog.value} blog posts`
      } else {
        finalDescription = `${selectedBlog.value} blog posts and ${
          selectedSocial.value
        } social media posts`
      }
      return finalDescription
    }
    const calcDelivery = () => {
      if (selectedBlog.delivery >= selectedSocial.delivery) {
        finalDelivery = selectedBlog.delivery
      } else {
        finalDelivery = selectedSocial.delivery
      }
      return finalDelivery
    }
    setAmount(calculatedAmount())
    setDiscount(calculatedDiscount())
    setDescription(joinDescription())
    setDeliveryTime(calcDelivery())
  })

  const dropDownBlog = () => {
    setShowBlog(!showBlog)
  }

  const dropDownSocial = () => {
    setShowSocial(!showSocial)
  }

  const selectBlog = item => {
    setSelectedBlog(item)
    setShowBlog(false)
  }

  const selectSocial = item => {
    setSelectedSocial(item)
    setShowSocial(false)
  }

  const formatMoney = cost => cost / 100

  return (
    <CheckoutCardWrapper>
      <SubHeadingStyle>
        Get a 10% discount if you order 4+ blog posts or 30+ social posts!
      </SubHeadingStyle>
      <QuantityTable>
        <QuantityTableHeading>Qty</QuantityTableHeading>
        <QuantityTableHeading>Item</QuantityTableHeading>
        <QuantityTableHeading>Price</QuantityTableHeading>
      </QuantityTable>
      <QuantityTable>
        <SelectWrapper>
          <SelectContainer style={{ zIndex: 3 }} onClick={dropDownBlog}>
            <SelectItemSelected>{selectedBlog.value}</SelectItemSelected>
            <SelectArrow>{showBlog ? <UpIcon /> : <DownIcon />}</SelectArrow>
            <SelectItems style={{ display: showBlog ? 'block' : 'none' }}>
              {blogQuantity.map(item => (
                <div
                  role="button"
                  tabIndex="0"
                  key={item.value}
                  onClick={() => selectBlog(item)}
                >
                  {item.value}
                </div>
              ))}
            </SelectItems>
          </SelectContainer>
        </SelectWrapper>
        <ParagraphStyle>Blog Posts</ParagraphStyle>
        <ParagraphStyle>$97 for 1</ParagraphStyle>
      </QuantityTable>
      <QuantityTable>
        <SelectWrapper>
          <SelectContainer onClick={dropDownSocial}>
            <SelectItemSelected>{selectedSocial.value}</SelectItemSelected>
            <SelectArrow>{showSocial ? <UpIcon /> : <DownIcon />}</SelectArrow>
            <SelectItems style={{ display: showSocial ? 'block' : 'none' }}>
              {socialQuantity.map(item => (
                <div
                  role="button"
                  tabIndex="0"
                  key={item.value}
                  onClick={() => selectSocial(item)}
                >
                  {item.value}
                </div>
              ))}
            </SelectItems>
          </SelectContainer>
        </SelectWrapper>
        <ParagraphStyle>Social Posts</ParagraphStyle>
        <ParagraphStyle>$97 for 5</ParagraphStyle>
      </QuantityTable>
      {selectedBlog.value > 0 || selectedSocial.value > 0 ? (
        <>
          <QuantityTable border>
            <QuantityTableHeading>Qty</QuantityTableHeading>
            <QuantityTableHeading>Summary</QuantityTableHeading>
            <QuantityTableHeading>Price</QuantityTableHeading>
          </QuantityTable>
          <QuantityTable border>
            <ParagraphStyle>{selectedBlog.value}</ParagraphStyle>
            <ParagraphStyle>Blog Posts</ParagraphStyle>
            <ParagraphStyle>${formatMoney(selectedBlog.price)}</ParagraphStyle>
          </QuantityTable>
          <QuantityTable border>
            <ParagraphStyle>{selectedSocial.value}</ParagraphStyle>
            <ParagraphStyle>Social Posts</ParagraphStyle>
            <ParagraphStyle>
              ${formatMoney(selectedSocial.price)}
            </ParagraphStyle>
          </QuantityTable>
          <QuantityTotalDiv>
            <QuantityTableHeading>DISCOUNT: ${discount}</QuantityTableHeading>
            <QuantityTableHeading>
              TOTAL: ${formatMoney(amount)}
            </QuantityTableHeading>
          </QuantityTotalDiv>
          <QuantityTableHeading style={{ textAlign: 'right' }}>
            DELIVERY: {deliveryTime} days
          </QuantityTableHeading>
        </>
      ) : (
        <div />
      )}
      <ButtonWrapper>
        <Checkout amount={amount} description={description} />
        <CardsImg src={CardTypeImg} alt="Types of cards we accept" />
      </ButtonWrapper>
    </CheckoutCardWrapper>
  )
}

export default CheckoutCard
