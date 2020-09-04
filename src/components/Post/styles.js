import styled from 'styled-components'

export const PostContainer = styled.div`
  display: inline-block;
  width: 100%;
  margin-right: 16px;
  
  &::last-child {
    margin: 0;
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
`

export const Img = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
