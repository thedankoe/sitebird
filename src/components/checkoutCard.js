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

const thirtyQuantity = [
  { value: 0, price: 0, discount: 0, delivery: 0 },
  { value: 1, price: 49700, discount: 0, delivery: 14 },
  { value: 2, price: 99400, discount: 0, delivery: 19 },
  { value: 3, price: 134190, discount: 14910, delivery: 24 },
  { value: 4, price: 178920, discount: 19880, delivery: 29 },
  { value: 5, price: 223650, discount: 24850, delivery: 34 },
  { value: 6, price: 268380, discount: 29820, delivery: 39 },
]

const sixtyQuantity = [
  { value: 0, price: 100, discount: 0, delivery: 0 },
  { value: 1, price: 89700, discount: 0, delivery: 14 },
  { value: 2, price: 179400, discount: 0, delivery: 19 },
  { value: 3, price: 242190, discount: 26910, delivery: 24 },
  { value: 4, price: 322920, discount: 35880, delivery: 29 },
  { value: 5, price: 403650, discount: 44850, delivery: 34 },
  { value: 6, price: 484380, discount: 53820, delivery: 39 },
]

const ninetyQuantity = [
  { value: 0, price: 0, discount: 0, delivery: 0 },
  { value: 1, price: 129700, discount: 0, delivery: 14 },
  { value: 2, price: 259400, discount: 0, delivery: 19 },
  { value: 3, price: 350190, discount: 38910, delivery: 24 },
  { value: 4, price: 466920, discount: 51880, delivery: 29 },
  { value: 5, price: 583650, discount: 64850, delivery: 34 },
  { value: 6, price: 700380, discount: 77820, delivery: 39 },
]

let finalDescription = ''

const CheckoutCard = () => {
  const [showThirty, setShowThirty] = useState(false)
  const [showSixty, setShowSixty] = useState(false)
  const [showNinety, setShowNinety] = useState(false)
  const [selectedThirty, setSelectedThirty] = useState(thirtyQuantity[0])
  const [selectedSixty, setSelectedSixty] = useState(sixtyQuantity[0])
  const [selectedNinety, setSelectedNinety] = useState(ninetyQuantity[0])
  const [discount, setDiscount] = useState(0)
  const [deliveryTime, setDeliveryTime] = useState(0)
  const [amount, setAmount] = useState(0)
  const [description, setDescription] = useState(
    'Select your quantity before purchasing.'
  )

  useEffect(() => {
    const calculatedAmount = () =>
      selectedThirty.price + selectedSixty.price + selectedNinety.price
    const calculatedDiscount = () =>
      selectedThirty.discount + selectedSixty.discount + selectedNinety.discount
    const joinDescription = () => {
      if (selectedThirty.value === 0 && selectedSixty.value === 0) {
        finalDescription = `${selectedNinety.value} 90 Second Video(s)`
      } else if (selectedSixty.value === 0 && selectedNinety.value === 0) {
        finalDescription = `${selectedThirty.value} 30 Second Video(s)`
      } else if (selectedThirty.value === 0 && selectedNinety.value === 0) {
        finalDescription = `${selectedSixty.value} 60 Second Video(s)`
      } else {
        finalDescription = `${selectedThirty.value +
          selectedSixty.value +
          selectedNinety.value} Multiple 30-90 Second Videos`
      }
      return finalDescription
    }
    const calcDelivery = () =>
      Math.max(
        selectedThirty.delivery,
        selectedSixty.delivery,
        selectedNinety.delivery
      )
    setAmount(calculatedAmount())
    setDiscount(calculatedDiscount())
    setDescription(joinDescription())
    setDeliveryTime(calcDelivery())
  })

  const dropDownThirty = () => {
    setShowThirty(!showThirty)
  }

  const dropDownSixty = () => {
    setShowSixty(!showSixty)
  }

  const dropDownNinety = () => {
    setShowNinety(!showNinety)
  }

  const selectThirty = item => {
    setSelectedThirty(item)
    setShowThirty(false)
  }

  const selectSixty = item => {
    setSelectedSixty(item)
    setShowSixty(false)
  }

  const selectNinety = item => {
    setSelectedNinety(item)
    setShowNinety(false)
  }

  const formatMoney = cost => cost / 100

  return (
    <CheckoutCardWrapper>
      <SubHeadingStyle>
        Get a 10% discount if you order 3 or more videos (same length)! That's
        hundreds in savings!
      </SubHeadingStyle>
      <QuantityTable>
        <QuantityTableHeading>Qty</QuantityTableHeading>
        <QuantityTableHeading>Item</QuantityTableHeading>
        <QuantityTableHeading>Price</QuantityTableHeading>
      </QuantityTable>
      <QuantityTable>
        <SelectWrapper>
          <SelectContainer style={{ zIndex: '3' }} onClick={dropDownThirty}>
            <SelectItemSelected>{selectedThirty.value}</SelectItemSelected>
            <SelectArrow>{showThirty ? <UpIcon /> : <DownIcon />}</SelectArrow>
            <SelectItems style={{ display: showThirty ? 'block' : 'none' }}>
              {thirtyQuantity.map(item => (
                <div
                  role="button"
                  tabIndex="0"
                  key={item.value}
                  onClick={() => selectThirty(item)}
                >
                  {item.value}
                </div>
              ))}
            </SelectItems>
          </SelectContainer>
        </SelectWrapper>
        <ParagraphStyle>30 Second Video</ParagraphStyle>
        <ParagraphStyle>$497</ParagraphStyle>
      </QuantityTable>
      <QuantityTable>
        <SelectWrapper>
          <SelectContainer style={{ zIndex: '2' }} onClick={dropDownSixty}>
            <SelectItemSelected>{selectedSixty.value}</SelectItemSelected>
            <SelectArrow>{showSixty ? <UpIcon /> : <DownIcon />}</SelectArrow>
            <SelectItems style={{ display: showSixty ? 'block' : 'none' }}>
              {sixtyQuantity.map(item => (
                <div
                  role="button"
                  tabIndex="0"
                  key={item.value}
                  onClick={() => selectSixty(item)}
                >
                  {item.value}
                </div>
              ))}
            </SelectItems>
          </SelectContainer>
        </SelectWrapper>
        <ParagraphStyle>60 Second Video</ParagraphStyle>
        <ParagraphStyle>$897</ParagraphStyle>
      </QuantityTable>
      <QuantityTable>
        <SelectWrapper>
          <SelectContainer onClick={dropDownNinety}>
            <SelectItemSelected>{selectedNinety.value}</SelectItemSelected>
            <SelectArrow>{showNinety ? <UpIcon /> : <DownIcon />}</SelectArrow>
            <SelectItems style={{ display: showNinety ? 'block' : 'none' }}>
              {ninetyQuantity.map(item => (
                <div
                  role="button"
                  tabIndex="0"
                  key={item.value}
                  onClick={() => selectNinety(item)}
                >
                  {item.value}
                </div>
              ))}
            </SelectItems>
          </SelectContainer>
        </SelectWrapper>
        <ParagraphStyle>90 Second Video</ParagraphStyle>
        <ParagraphStyle>$1297</ParagraphStyle>
      </QuantityTable>
      {selectedThirty.value > 0 ||
      selectedSixty.value > 0 ||
      selectedNinety.value > 0 ? (
        <>
          <QuantityTable border>
            <QuantityTableHeading>Qty</QuantityTableHeading>
            <QuantityTableHeading>Summary</QuantityTableHeading>
            <QuantityTableHeading>Price</QuantityTableHeading>
          </QuantityTable>
          <QuantityTable border>
            <ParagraphStyle>{selectedThirty.value}</ParagraphStyle>
            <ParagraphStyle>30 Second Video</ParagraphStyle>
            <ParagraphStyle>
              ${formatMoney(selectedThirty.price)}
              {selectedThirty.value >= 3 ? '0' : ''}
            </ParagraphStyle>
          </QuantityTable>
          <QuantityTable border>
            <ParagraphStyle>{selectedSixty.value}</ParagraphStyle>
            <ParagraphStyle>60 Second Video</ParagraphStyle>
            <ParagraphStyle>
              ${formatMoney(selectedSixty.price)}
              {selectedSixty.value >= 3 ? '0' : ''}
            </ParagraphStyle>
          </QuantityTable>
          <QuantityTable border>
            <ParagraphStyle>{selectedNinety.value}</ParagraphStyle>
            <ParagraphStyle>90 Second Video</ParagraphStyle>
            <ParagraphStyle>
              ${formatMoney(selectedNinety.price)}
              {selectedNinety.value >= 3 ? '0' : ''}
            </ParagraphStyle>
          </QuantityTable>
          <QuantityTotalDiv>
            <QuantityTableHeading>
              DISCOUNT: ${formatMoney(discount)}
              {selectedThirty.value >= 3 ||
              selectedSixty.value >= 3 ||
              selectedNinety.value >= 3
                ? '0'
                : ''}
            </QuantityTableHeading>
            <QuantityTableHeading>
              TOTAL: ${formatMoney(amount)}
              {selectedThirty.value >= 3 ||
              selectedSixty.value >= 3 ||
              selectedNinety.value >= 3
                ? '0'
                : ''}
            </QuantityTableHeading>
          </QuantityTotalDiv>
          <QuantityTableHeading style={{ textAlign: 'right' }}>
            ESTIMATED DELIVERY: {deliveryTime} days
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
