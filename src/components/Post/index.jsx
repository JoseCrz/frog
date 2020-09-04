import React from 'react'

import { UserDetails } from '../UserDetails'
import { PostContainer, Img, ImgContainer } from './styles'

export const Post = ({ post }) => {
  const { urls, user } = post
  return (
    <PostContainer>
      <ImgContainer>
        <Img src={urls.regular} />
      </ImgContainer>
      <UserDetails name={user.name} username={user.username} profileImage={user.profile_image.medium} />
    </PostContainer>
  )
}
