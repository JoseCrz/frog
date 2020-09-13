import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Context } from '../../Context'

import { useNearScreen } from '../../hooks/useNearScreen'

import { PictureDetails } from '../PictureDetails'
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
      <PictureDetails name={user.name} username={user.username} profileImage={user.profile_image.medium} />
    </PostContainer>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}
