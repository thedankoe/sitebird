import React, { Component } from 'react'
import styled from 'styled-components'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import Portal from './portal'
import { device } from './styles/MediaQueries'

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton type="button" onClick={toggle}>
                <CloseIcon />
              </CloseButton>
              <div>{children}</div>
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    )
  }
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`

const ModalCard = styled.div`
  position: relative;
  width: 50%;
  z-index: 10;
  margin-bottom: 100px;
  background: white;
  border-radius: 5px;
  padding: 15px;
  color: #000;
  box-shadow: ${props => props.theme.bs};
  transition: all 0.3s ease;
  &:hover {
    box-shadow: ${props => props.theme.bsHover};
  }

  @media ${device.desktop} {
    width: 70%;
  }

  @media ${device.tabletL} {
    width: 95%;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  cursor: pointer;
  z-index: 20;
`

const CloseIcon = styled(IoIosCloseCircleOutline)`
  font-size: 3rem;
  fill: #fff;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`
