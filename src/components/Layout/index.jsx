import React from 'react'
import { Helmet } from 'react-helmet'

import { Main } from './styles'

export const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{`Frog | ${title}`}</title>
        <link href='https://fonts.googleapis.com/css2?family=Comfortaa&family=Roboto:wght@400;700&display=swap' rel='stylesheet' />
      </Helmet>
      <Main>
        {
          children
        }
      </Main>
    </>
  )
}
