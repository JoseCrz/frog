import React from 'react'
import { H1 } from './styles'
export const Header = ({ children }) => {
  return (
    <header>
      <H1>{children}</H1>
    </header>
  )
}
