import styled from 'styled-components'

export const Wrapper = styled.div`
  background: var(--background);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin: 0 auto;
  max-width: 414px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: calc(calc(var(--vh, 1vh) * 100 ) - 60px) 60px;
  grid-template-areas: 'main'
                       'navbar';
`

export const Main = styled.main`
  padding: 0px 16px;
  overflow: scroll;
  max-height: 100%;
  grid-area: main;
`
