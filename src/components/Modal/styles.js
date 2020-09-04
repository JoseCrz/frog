import styled from 'styled-components'

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

export const Arranger = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const ThumbImg = styled(Img)`
  filter: blur(10px);
  transform: scale(1.1);
  transition: visibility 0ms ease 3.5s;
  visibility: ${({ isPictureLoaded }) => isPictureLoaded ? 'hidden' : 'visible'};
`

export const LoadedImage = styled(Img)`
  transition: opacity 3.5s ease 0ms;
  opacity: ${({ isPictureLoaded }) => isPictureLoaded ? 1 : 0};
`

export const Details = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 40%;
  padding: 12px 16px;
  background: linear-gradient(179.47deg, #000000 0.45%, rgba(196, 196, 196, 0) 99.55%);
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
