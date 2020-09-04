import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar } from '../Navbar'

import { Wrapper, Main } from './styles'

export const Layout = ({ children, pageName }) => {
  return (
    <>
      <Helmet>
        <title>{`Frog | ${pageName}`}</title>
      </Helmet>
      <Wrapper>
        <Main>
          {
            children
          }
        </Main>
        <Navbar />
      </Wrapper>
    </>
  )
}
