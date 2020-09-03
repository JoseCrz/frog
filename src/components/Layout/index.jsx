import React from 'react'
import { Helmet } from 'react-helmet'

import { Wrapper, H1 } from './styles'

export const Layout = ({ children, pageName, title }) => {
  return (
    <>
      <Helmet>
        <title>{`Frog | ${pageName}`}</title>
      </Helmet>
      <Wrapper>
        {
          title && (
            <header>
              <H1>{title}</H1>
            </header>
          )
        }
        <main>
          {
            children
          }
        </main>
      </Wrapper>
    </>
  )
}
