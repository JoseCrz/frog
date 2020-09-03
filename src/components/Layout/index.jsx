import React from 'react'
import { Helmet } from 'react-helmet'

import { Main } from './styles'

export const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{`Frog | ${title}`}</title>
      </Helmet>
      <Main>
        {
          children
        }
      </Main>
    </>
  )
}
