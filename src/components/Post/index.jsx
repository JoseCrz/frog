import React from 'react'

import { UserDetails } from '../UserDetails'
import { PostContainer, Img, ImgContainer } from './styles'

export const Post = ({ pictureUrl, userName, userHandle, userPicture }) => {
  return (
    <PostContainer>
      <ImgContainer>
        <Img src={pictureUrl} />
      </ImgContainer>
      <UserDetails userName={userName} userHandle={userHandle} userPicture={userPicture} />
    </PostContainer>
  )
}
