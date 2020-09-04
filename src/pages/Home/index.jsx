import React from 'react'
import { Layout } from '../../components/Layout'
import { Header } from '../../components/Header'
import { ListOfPost } from '../../components/ListOfPosts'

import { Container } from './styles'
export const Home = () => {
  return (
    <Layout pageName='Home'>
      <Container>
        <Header>Discover</Header>
        <ListOfPost listTitle={'What\'s new today'} />

      </Container>
    </Layout>
  )
}
