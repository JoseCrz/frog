import React from 'react'

// import { postsMock } from '../../mocks/postsMock'
import { Post } from '../Post'

import { useFetchPictures } from '../../hooks/useFetchPictures'

import { Container, Scroller, P } from './styles'

export const ListOfPost = ({ listTitle }) => {
  const { pictures } = useFetchPictures()
  return (
    <>
      <P>{listTitle}</P>
      <Scroller>
        <Container>
          {
            pictures.map(picture => <Post key={picture.id} post={picture} />)
          }
        </Container>

      </Scroller>
    </>
  )
}
