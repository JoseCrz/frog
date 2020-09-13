import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Context } from '../../Context'

import { Details, ProfileImg, Name, Username, StyledLink } from './styles'

export const PictureDetails = ({ profileImage, name, username, darkBackground }) => {
  const { deactivateModal } = useContext(Context)

  const handleOnClick = () => deactivateModal()

  return (
    <StyledLink to={`/user/${username}`} onClick={handleOnClick}>
      <Details darkBackground={darkBackground}>
        <ProfileImg src={profileImage} alt={`${name} profile picture`} />
        <div>
          <Name>{name}</Name>
          <Username>@{username}</Username>
        </div>
      </Details>
    </StyledLink>
  )
}

PictureDetails.propTypes = {
  profileImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  darkBackground: PropTypes.bool
}
