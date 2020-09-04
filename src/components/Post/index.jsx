import React from 'react'

import { PostContainer, Img, ImgContainer, Details, UserPicture, UserName, UserHandle } from './styles'

export const Post = ({ pictureUrl, userName, userHandle, userPicture }) => {
  return (
    <PostContainer>
      <ImgContainer>
        <Img src={pictureUrl} />
      </ImgContainer>
      <Details>
        <UserPicture src={userPicture} alt='' />
        <div>
          <UserName>{userName}</UserName>
          <UserHandle>{userHandle}</UserHandle>
        </div>
      </Details>
    </PostContainer>
  )
}
