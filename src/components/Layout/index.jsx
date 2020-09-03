import React from 'react'
import { Helmet } from 'react-helmet'

import { Main } from './styles'

export const Layout = ({ children, pageName }) => {
  return (
    <>
      <Helmet>
        <title>{`Frog | ${pageName}`}</title>
      </Helmet>
      <Main>
        {
          children
        }
      </Main>
    </>
  )
}
