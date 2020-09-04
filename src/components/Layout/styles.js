import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: calc(calc(var(--vh, 1vh) * 100 ) - 60px) 60px;
  grid-template-areas: 'main'
                       'navbar';
`

export const Main = styled.main`
  padding: 0px 16px;
  grid-area: main;
`
