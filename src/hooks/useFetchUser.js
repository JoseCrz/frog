import { useEffect, useState } from 'react'
import axios from 'axios'

import { createUserUrl, addClientIdToUrl } from '../utils/urlConstructors'

export const useFetchUser = ({ username }) => {
  const [user, setUser] = useState({})
  const [userPhotosEndpoint, setUserPhotosEndpoint] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      const userUrl = createUserUrl({ username })

      try {
        const { data } = await axios.get(userUrl)
        setUserPhotosEndpoint(addClientIdToUrl(data.links.photos))
        setUser(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  return { user, userPhotosEndpoint, loading }
}
