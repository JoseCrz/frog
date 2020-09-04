import React from 'react'
import ReactDOM from 'react-dom'

import { UserDetails } from '../UserDetails'

import { Container, Img, Details } from './styles'

export const Modal = ({ isModalOpen }) => {
  if (!isModalOpen) return null
  return ReactDOM.createPortal(
    <Container>
      <Img src='https://images.unsplash.com/photo-1599009432647-d819387c53c9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE2MzExOX0' />
      <Details>
        <UserDetails />
      </Details>
    </Container>
    , document.querySelector('#modal'))
}
