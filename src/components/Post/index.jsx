import React, { useContext } from 'react'
import { Context } from '../../Context'

import { useNearScreen } from '../../hooks/useNearScreen'

import { UserDetails } from '../UserDetails'
import { PostContainer, Img, ImgContainer } from './styles'

export const Post = ({ post }) => {
  const { activateModal } = useContext(Context)

  const [show, element] = useNearScreen()

  const handleOnClick = () => activateModal({ picture: post })

  const { urls, user } = post

  return (
    <PostContainer ref={element}>
      <ImgContainer>
        {
          show && <Img onClick={handleOnClick} src={urls.regular} />
        }
      </ImgContainer>
      <UserDetails name={user.name} username={user.username} profileImage={user.profile_image.medium} />
    </PostContainer>
  )
}
