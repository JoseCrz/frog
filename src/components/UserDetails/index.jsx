import React from 'react'

import { Details, ProfileImg, Name, Username } from './styles'

export const UserDetails = ({ profileImage, name, username, darkBackground }) => {
  return (
    <Details darkBackground={darkBackground}>
      <ProfileImg src={profileImage} alt='' />
      <div>
        <Name>{name}</Name>
        <Username>@{username}</Username>
      </div>
    </Details>
  )
}
