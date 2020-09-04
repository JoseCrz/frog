import styled from 'styled-components'

export const Nav = styled.nav`
  grid-area: navbar;
  background: var(--background);
  border-top: 1px solid lightgray;
`

export const Ul = styled.ul`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
`

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`
