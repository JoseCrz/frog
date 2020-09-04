import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const value = {
    isModalOpen,
    activateModal: () => setIsModalOpen(true),
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
