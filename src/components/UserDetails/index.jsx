import React from 'react'

import { Details, UserPicture, UserName, UserHandle } from './styles'

export const UserDetails = ({ userPicture, userName, userHandle }) => {
  return (
    <Details>
      <UserPicture src={userPicture} alt='' />
      <div>
        <UserName>{userName}</UserName>
        <UserHandle>{userHandle}</UserHandle>
      </div>
    </Details>
  )
}
