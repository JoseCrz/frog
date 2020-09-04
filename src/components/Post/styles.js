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
  max-height: 100%;
  object-fit: cover;
  object-position: center;
`

export const Details = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
`

export const UserPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
`
export const UserName = styled.p`
  font-weight: bold;
  font-size: 13px;
  margin: 0;
`

export const UserHandle = styled.p`
  font-size: 11px;
  margin: 0;
`