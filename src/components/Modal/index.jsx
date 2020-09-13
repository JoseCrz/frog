import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { VscChromeClose } from 'react-icons/vsc'

import { Context } from '../../Context'

import { UserDetails } from '../UserDetails'

import { Container, Arranger, ThumbImg, LoadedImage, Details, CloseButton } from './styles'

export const Modal = ({ isModalOpen }) => {
  const { currentPicture, deactivateModal } = useContext(Context)
  const [isPictureLoaded, setIsPictureLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const { urls, user } = currentPicture

  const handleOnLoad = () => setIsPictureLoaded(true)

  const handleOnClick = () => {
    setIsPictureLoaded(false)
    deactivateModal()
  }

  if (!isModalOpen) return null

  return ReactDOM.createPortal(
    <Container>
      <ThumbImg src={urls.regular} isPictureLoaded={isPictureLoaded} />
      <LoadedImage onClick={() => setIsVisible(!isVisible)} onLoad={handleOnLoad} src={urls.full} isPictureLoaded={isPictureLoaded} />
      <Details isVisible={isVisible}>
        <Arranger>
          <UserDetails
            profileImage={user.profile_image.medium}
            name={user.name}
            username={user.username}
            darkBackground
          />
          <CloseButton onClick={handleOnClick}>
            <VscChromeClose color='white' size='24px' />
          </CloseButton>
        </Arranger>
      </Details>
    </Container>
    , document.querySelector('#modal'))
}

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired
}
