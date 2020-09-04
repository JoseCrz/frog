import styled from 'styled-components'
import { GiCancel } from 'react-icons/gi'

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999999;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
export const Details = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 40%;
  padding: 12px 16px;
  background: linear-gradient(179.47deg, #000000 0.45%, rgba(196, 196, 196, 0) 99.55%);
`
