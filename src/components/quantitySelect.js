/* eslint react/destructuring-assignment: 0 */
/* eslint jsx-a11y/label-has-associated-control: 0 */
/* eslint jsx-a11y/label-has-for: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
import React, { Component } from 'react'
import styled from 'styled-components'
import { DownIcon, UpIcon } from './styles/IconStyles'

const SelectWrapper = styled.div`
  width: 100%;
`

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  padding-left: 1rem;
  border: 2px solid ${props => props.theme.secondary};
  border-radius: 3px;
  font-size: 1.8rem;
  color: ${props => props.theme.primary};
  cursor: pointer;
`

const SelectItemSelected = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  vertical-align: middle;
`

const SelectItems = styled.div`
  div {
    padding: 1rem;
    padding-left: 3rem;
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

export default class QuantitySelect extends Component {
  state = {
    quantity: this.props.quantity || [],
    selectedQuantity: this.props.quantity[0] || this.props.selectedQuantity,
    showItems: false,
  }

  componentDidMount() {}

  componentDidUpdate() {}

  dropDown = () => {
    const { showItems } = this.state
    this.setState({
      showItems: !showItems,
    })
  }

  selectItem = quantity => {
    this.setState({
      selectedQuantity: quantity,
      showItems: false,
    })
  }

  render() {
    const { quantity, showItems, selectedQuantity } = this.state
    return (
      <SelectWrapper>
        <input
          type="hidden"
          value={selectedQuantity.value}
          name="choice"
          id="choice"
        />
        <SelectContainer onClick={this.dropDown}>
          <SelectItemSelected>{selectedQuantity.value}</SelectItemSelected>
          <SelectArrow>{showItems ? <UpIcon /> : <DownIcon />}</SelectArrow>
          <SelectItems style={{ display: showItems ? 'block' : 'none' }}>
            {quantity.map(item => (
              <div
                role="button"
                tabIndex="0"
                key={item.id}
                onClick={() => this.selectItem(item)}
              >
                {item.value}
              </div>
            ))}
          </SelectItems>
        </SelectContainer>
      </SelectWrapper>
    )
  }
}
