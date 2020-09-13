import React, { useContext } from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

import { Context } from '../../Context'

import { Details, ProfileImg, Name, Username } from './styles'

export const PictureDetails = ({ profileImage, name, username, darkBackground }) => {
  const { deactivateModal } = useContext(Context)

  const handleOnClick = () => deactivateModal()

  return (
    <Link to={`/user/${username}`} onClick={(handleOnClick)}>
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
