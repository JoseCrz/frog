import React from 'react'

import { Button } from '../Button'
import { Container, Picture, Name, Location } from './styles'
export const UserInfo = ({ pictureUrl, name, location }) => {
  return (
    <Container>
      <Picture src={pictureUrl} />
      <Name>{name}</Name>
      <Location>{location}</Location>
      <Button isPrimary>{`Follow ${name}`}</Button>
      <Button>Message</Button>
    </Container>
  )
}
