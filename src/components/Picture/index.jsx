import React, { useContext } from 'react'
import { Context } from '../../Context'
import { useNearScreen } from '../../hooks/useNearScreen'

import { ImgContainer, Img } from './styles'

export const Picture = ({ urls, width, height }) => {
  const { activateModal } = useContext(Context)
  const [show, element] = useNearScreen()
  const aspectRatio = (height / width) * 100

  const handleOnClick = () => activateModal()

  return (
    <ImgContainer ref={element} aspectRatio={aspectRatio}>
      {
        show && <Img onClick={handleOnClick} src={urls.small} />
      }
    </ImgContainer>
  )
}
