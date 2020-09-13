import { useEffect, useState } from 'react'
import axios from 'axios'

import { createUserUrl, addClientIdToUrl } from '../utils/urlConstructors'

export const useFetchUser = ({ username }) => {
  const [user, setUser] = useState({})
  const [photos, setPhotos] = useState({})

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      const userUrl = createUserUrl({ username })

      try {
        const { data: userData } = await axios.get(userUrl)
        const userPhotosUrl = addClientIdToUrl(userData.links.photos)
        const { data: photosData } = await axios.get(userPhotosUrl)
        setPhotos(photosData)
        setUser(userData)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  return { user, photos, loading }
}
