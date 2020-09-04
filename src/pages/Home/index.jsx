import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Layout } from '../../components/Layout'
import { Header } from '../../components/Header'
import { ListOfPost } from '../../components/ListOfPosts'
import { ListOfPictures } from '../../components/ListOfPictures'
import { Button } from '../../components/Button'

import { baseApiURL } from '../../config'
import { picturesMock } from '../../mocks/picturesMock'
export const Home = () => {
  const [loading, setLoading] = useState(false)
  const [pictures, setPictures] = useState([])
  const [page, setPage] = useState(2)

  useEffect(() => {
    const fetchPictures = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(`${baseApiURL}&page=${page}`)
        const newPictures = [
          ...pictures,
          ...data
        ]
        console.log('fetchPictures -> newPictures', newPictures)
        setPictures(newPictures)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchPictures()
  }, [page])

  const handleClick = () => setPage(page + 1)

  return (
    <Layout pageName='Home'>
      <Header>Discover</Header>
      <ListOfPost listTitle={'What\'s new today'} />
      <ListOfPictures listTitle='Browse All' pictures={pictures} />
      <Button onClick={handleClick}>See More</Button>
    </Layout>
  )
}
