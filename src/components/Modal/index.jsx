import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { Context } from '../../Context'
import { DetailsOverlay } from '../DetailsOverlay'

import { Container, ThumbImg, LoadedImage } from './styles'

export const Modal = ({ isModalOpen }) => {
  const { currentPicture, deactivateModal } = useContext(Context)
  const [isPictureLoaded, setIsPictureLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const { urls, user } = currentPicture

  const handleOnLoad = () => setIsPictureLoaded(true)

  const handleOnLoadedImageClick = () => setIsVisible(!isVisible)

  const handleOnCloseButtonClick = () => {
    setIsPictureLoaded(false)
    deactivateModal()
  }

  if (!isModalOpen) return null

  return ReactDOM.createPortal(
    <Container>
      <ThumbImg src={urls.regular} isPictureLoaded={isPictureLoaded} />
      <LoadedImage
        onClick={handleOnLoadedImageClick}
        onLoad={handleOnLoad}
        src={urls.full}
        isPictureLoaded={isPictureLoaded}
      />
      <DetailsOverlay
        user={user}
        onCloseButtonClick={handleOnCloseButtonClick}
        isVisible={isVisible}
      />
    </Container>
    , document.querySelector('#modal'))
}

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired
}
