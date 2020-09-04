import React from 'react'
import { Container, Chase, ChaseDot } from './styles'

export const Loader = () => {
  return (
    <Container>
      <Chase>
        <ChaseDot />
        <ChaseDot />
        <ChaseDot />
        <ChaseDot />
        <ChaseDot />
        <ChaseDot />
      </Chase>
    </Container>
  )
}
