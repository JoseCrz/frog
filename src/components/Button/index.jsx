import React from 'react'

import { StyledButton } from './styles'
export const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
