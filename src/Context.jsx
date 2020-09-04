import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPicture, setCurrentPicture] = useState({})

  const value = {
    currentPicture,
    isModalOpen,
    activateModal: ({ picture }) => {
      setCurrentPicture(picture)
      setIsModalOpen(true)
    },
    deactivateModal: () => setIsModalOpen(false)
  }

  return (
    <Context.Provider value={value}>
      {
        children
      }
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
