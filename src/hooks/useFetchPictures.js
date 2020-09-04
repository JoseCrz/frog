import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseApiURL } from '../config'

export const useFetchPictures = ({ initialPage = 1 } = {}) => {
  const [loading, setLoading] = useState(false)
  const [pictures, setPictures] = useState([])
  const [page, setPage] = useState(initialPage)

  const nextPage = () => setPage(page + 1)

  useEffect(() => {
    const fetchPictures = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(`${baseApiURL}&page=${page}`)
        const newPictures = [
          ...pictures,
          ...data
        ]
        setPictures(newPictures)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchPictures()
  }, [page])

  return { loading, pictures, nextPage }
}
