import React from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-responsive-masonry'
import { Picture } from '../Picture'

import { P } from './styles'

export const ListOfPictures = ({ pictures, listTitle }) => {
  return (
    <>
      <P>{listTitle}</P>
      <Masonry columnsCount={2} gutter='10px'>
        {
          pictures.map(picture => <Picture key={picture.id} picture={picture} />)
        }
      </Masonry>
    </>
  )
}

ListOfPictures.propTypes = {
  pictures: PropTypes.array.isRequired,
  listTitle: PropTypes.string.isRequired
}
