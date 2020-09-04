import React from 'react'

import { Grid, ImgContainer, Img, P } from './styles'
export const ListOfPictures = ({ pictures, listTitle }) => {
  return (
    <>
      <P>{listTitle}</P>
      <Grid>
        {
          pictures.map(picture => (
            <ImgContainer key={picture.id}>
              <Img src={picture.urls.small} />
            </ImgContainer>
          ))
        }
      </Grid>
    </>
  )
}
