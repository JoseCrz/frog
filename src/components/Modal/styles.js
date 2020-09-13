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
