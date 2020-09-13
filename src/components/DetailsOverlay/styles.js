import styled from 'styled-components'

export const Details = styled.div`
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  position: absolute;
  top: 0;
  width: 100%;
  height: 40%;
  padding: 12px 16px;
  background: linear-gradient(179.47deg, #000000 0.45%, rgba(196, 196, 196, 0) 99.55%);
  transition: cubic-bezier(0.55, 0.055, 0.675, 0.19) .3s;
`

export const Arranger = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
