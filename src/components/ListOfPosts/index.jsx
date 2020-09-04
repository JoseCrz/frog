import React from 'react'

import { postsMock } from '../../mocks/postsMock'
import { Post } from '../Post'

import { Container, Scroller, P } from './styles'

export const ListOfPost = ({ listTitle }) => {
  return (
    <>
      <P>{listTitle}</P>
      <Scroller>
        <Container>
          {
            postsMock.map(post => <Post key={post.id} {...post} />)
          }
        </Container>

      </Scroller>
    </>
  )
}
