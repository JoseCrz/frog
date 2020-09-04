import React from 'react'

import { Grid, ImgContainer, Img } from './styles'
export const ListOfPictures = ({ pictures }) => {
  return (
    <Grid>
      {
        pictures.map(picture => (
          <ImgContainer key={picture.id}>
            <Img src={picture.urls.small} />
          </ImgContainer>
        ))
      }
    </Grid>
  )
}
