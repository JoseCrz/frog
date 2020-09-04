import React from 'react'
import { Layout } from '../../components/Layout'
import { ListOfPost } from '../../components/ListOfPosts'
export const Home = () => {
  return (
    <Layout title='Discover' pageName='Home'>
      <ListOfPost listTitle={'What\'s new today'} />
    </Layout>
  )
}
