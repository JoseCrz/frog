import styled from 'styled-components'
import { Link as RouterLink } from '@reach/router'

export const Details = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  ${({ darkBackground }) => darkBackground && 'color: white;'}
`

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
`
export const Name = styled.p`
  font-weight: bold;
  font-size: 13px;
  margin: 0;
`

export const Username = styled.p`
  font-size: 11px;
  margin: 0;
`

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: ${({ darkBackground }) => darkBackground ? 'color: white' : 'var(--text-color)'};
`
