import React from 'react'

// import { postsMock as pictures } from '../../mocks/postsMock'
import { Post } from '../Post'
import { Loader } from '../Loader'

import { useFetchPictures } from '../../hooks/useFetchPictures'

import { Container, Scroller, P } from './styles'

export const ListOfPost = ({ listTitle }) => {
  const { pictures, loading } = useFetchPictures()
  return (
    <>
      <P>{listTitle}</P>
      {
        loading
          ? <Loader />
          : (
            <Scroller>
              <Container>
                {
                  pictures.map(picture => <Post key={picture.id} post={picture} />)
                }
              </Container>
            </Scroller>
          )
      }
    </>
  )
}
