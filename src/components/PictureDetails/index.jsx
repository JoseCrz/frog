import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

import { Details, ProfileImg, Name, Username } from './styles'

export const PictureDetails = ({ profileImage, name, username, darkBackground }) => {
  return (
    <Link to={`/user/${username}`}>
      <Details darkBackground={darkBackground}>
        <ProfileImg src={profileImage} alt='' />
        <div>
          <Name>{name}</Name>
          <Username>@{username}</Username>
        </div>
      </Details>
    </Link>
  )
}

PictureDetails.propTypes = {
  profileImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  darkBackground: PropTypes.bool
}
