import React from 'react'
import { Layout } from '../../components/Layout'
import { Header } from '../../components/Header'
import { ListOfPost } from '../../components/ListOfPosts'

export const Home = () => {
  return (
    <Layout pageName='Home'>
      <Header>Discover</Header>
      <ListOfPost listTitle={'What\'s new today'} />
    </Layout>
  )
}
