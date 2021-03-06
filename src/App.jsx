import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'

import { useFixNavbarBug } from './hooks/useFixNavbarBug'

import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  useFixNavbarBug()
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home path='/' />
      </Router>
    </>
  )
}
