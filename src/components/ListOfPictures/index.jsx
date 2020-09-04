import React from 'react'
import { Picture } from '../Picture'

import { Grid, P } from './styles'
export const ListOfPictures = ({ pictures, listTitle }) => {
  return (
    <>
      <P>{listTitle}</P>
      <Grid>
        {
          pictures.map(picture => <Picture key={picture.id} picture={picture} />)
        }
      </Grid>
    </>
  )
}
