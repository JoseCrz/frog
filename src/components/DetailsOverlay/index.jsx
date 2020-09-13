import React from 'react'
import PropTypes from 'prop-types'
import { VscChromeClose } from 'react-icons/vsc'

import { UserDetails } from '../UserDetails'

import { Details, Arranger, CloseButton } from './styles'

export const DetailsOverlay = ({ isVisible, user, onCloseButtonClick }) => {
  return (
    <Details isVisible={isVisible}>
      <Arranger>
        <UserDetails
          profileImage={user.profile_image.medium}
          name={user.name}
          username={user.username}
          darkBackground
        />
        <CloseButton onClick={onCloseButtonClick}>
          <VscChromeClose color='white' size='24px' />
        </CloseButton>
      </Arranger>
    </Details>
  )
}

DetailsOverlay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired
}
