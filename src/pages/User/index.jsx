import React from 'react'

import { Layout } from '../../components/Layout'
import { UserInfo } from '../../components/UserInfo'
import { ListOfPictures } from '../../components/ListOfPictures'
import { Loader } from '../../components/Loader'

import { useFetchUser } from '../../hooks/useFetchUser'

export const User = ({ username }) => {
  const { user, userPhotosEndpoint, loading } = useFetchUser({ username })

  return (
    <Layout pageName={username}>
      {
        loading ? <Loader /> : <UserInfo name={user.name} location={user.location} pictureUrl={user.profile_image.large} />
      }
      {
        loading ? <Loader /> : <ListOfPictures endpoint={userPhotosEndpoint} />
      }
    </Layout>
  )
}
