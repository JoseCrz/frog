import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'

import { ImgContainer, Img } from './styles'

export const Picture = ({ urls, width, height }) => {
  const [show, element] = useNearScreen()
  const aspectRatio = (height / width) * 100

  return (
    <ImgContainer ref={element} aspectRatio={aspectRatio}>
      {
        show && <Img src={urls.small} />
      }
    </ImgContainer>
  )
}
