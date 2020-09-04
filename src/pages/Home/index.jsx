import React from 'react'
import { Layout } from '../../components/Layout'
import { Header } from '../../components/Header'
import { ListOfPost } from '../../components/ListOfPosts'
import { ListOfPictures } from '../../components/ListOfPictures'
import { Button } from '../../components/Button'

import { useFetchPictures } from '../../hooks/useFetchPictures'

// import { picturesMock } from '../../mocks/picturesMock'

export const Home = () => {
  const { pictures, nextPage } = useFetchPictures({ initialPage: 2 })

  const handleClick = () => nextPage()

  return (
    <Layout pageName='Home'>
      <Header>Discover</Header>
      <ListOfPost listTitle={'What\'s new today'} />
      <ListOfPictures listTitle='Browse All' pictures={pictures} />
      <Button onClick={handleClick}>See More</Button>
    </Layout>
  )
}
