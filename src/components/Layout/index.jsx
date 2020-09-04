import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar } from '../Navbar'

import { Wrapper } from './styles'

export const Layout = ({ children, pageName }) => {
  return (
    <>
      <Helmet>
        <title>{`Frog | ${pageName}`}</title>
      </Helmet>
      <Wrapper>
        <main>
          {
            children
          }
        </main>
        <Navbar />
      </Wrapper>
    </>
  )
}
