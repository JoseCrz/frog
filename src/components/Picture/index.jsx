import React, { useContext } from 'react'
import { Context } from '../../Context'
import { useNearScreen } from '../../hooks/useNearScreen'

import { ImgContainer, Img } from './styles'

export const Picture = React.memo(
  ({ picture }) => {
    const { activateModal } = useContext(Context)
    const [show, element] = useNearScreen()

    const { height, width, urls } = picture
    const aspectRatio = (height / width) * 100

    const handleOnClick = () => activateModal({ picture })

    return (
      <ImgContainer ref={element} aspectRatio={aspectRatio}>
        {
          show && <Img onClick={handleOnClick} src={urls.regular} />
        }
      </ImgContainer>
    )
  }
)
