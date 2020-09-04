import React from 'react'

import { ImgContainer, Img } from './styles'
export const Picture = ({ urls, width, height }) => {
  const aspectRatio = (height / width) * 100

  return (
    <ImgContainer aspectRatio={aspectRatio}>
      <Img src={urls.small} />
    </ImgContainer>
  )
}
