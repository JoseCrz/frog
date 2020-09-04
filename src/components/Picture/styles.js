import styled from 'styled-components'

export const ImgContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-bottom: 10px;
  padding-bottom: ${({ aspectRatio }) => `${aspectRatio}%`};
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  position: absolute;
  max-height: 100%;
  /* top: 0;
  object-fit: cover;
  object-position: center;
  vertical-align: middle; */
`
