import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSideOpen, setIsSideOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openSide = () => {
    setIsSideOpen(true)
  }

  const closeSide = () => {
    setIsSideOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSideOpen,
        openModal,
        closeModal,
        openSide,
        closeSide,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
