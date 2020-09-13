import React from 'react'

import { userMock } from '../../mocks/userMock'
import { Layout } from '../../components/Layout'
import { UserInfo } from '../../components/UserInfo'

export const User = () => {
  return (
    <Layout>
      <UserInfo name={userMock.name} location={userMock.location} pictureUrl={userMock.profile_image.large} />
    </Layout>
  )
}
