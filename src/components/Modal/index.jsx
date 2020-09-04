import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { Context } from '../../Context'

import { UserDetails } from '../UserDetails'

import { Container, Img, Details } from './styles'

export const Modal = ({ isModalOpen }) => {
  const { currentPicture } = useContext(Context)
  const { urls, user } = currentPicture

  if (!isModalOpen) return null
  return ReactDOM.createPortal(
    <Container>
      <Img src={urls.full} />
      <Details>
        <UserDetails
          profileImage={user.profile_image.medium}
          name={user.name}
          username={user.username}
          darkBackground
        />
      </Details>
    </Container>
    , document.querySelector('#modal'))
}
