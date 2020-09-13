import React from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-responsive-masonry'
import { Picture } from '../Picture'
import { Button } from '../Button'
import { useFetchPictures } from '../../hooks/useFetchPictures'

import { P } from './styles'

export const ListOfPictures = ({ listTitle, endpoint }) => {
  const { pictures, nextPage } = useFetchPictures({ initialPage: 2, endpoint })

  const handleOnClick = () => nextPage()

  return (
    <>
      <P>{listTitle}</P>
      <Masonry columnsCount={2} gutter='10px'>
        {
          pictures.map(picture => <Picture key={picture.id} picture={picture} />)
        }
      </Masonry>
      <Button onClick={handleOnClick}>See More</Button>
    </>
  )
}

ListOfPictures.propTypes = {
  listTitle: PropTypes.string,
  endpoint: PropTypes.string
}
