import React from 'react'

import { useNearScreen } from '../../hooks/useNearScreen'

import { UserDetails } from '../UserDetails'
import { PostContainer, Img, ImgContainer } from './styles'

export const Post = ({ post }) => {
  const [show, element] = useNearScreen()

  const { urls, user } = post
  return (
    <PostContainer ref={element}>
      <ImgContainer>
        {
          show && <Img src={urls.regular} />
        }
      </ImgContainer>
      <UserDetails name={user.name} username={user.username} profileImage={user.profile_image.medium} />
    </PostContainer>
  )
}
