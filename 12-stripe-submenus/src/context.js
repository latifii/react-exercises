import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false)
  const [isSubmenu, setIsSubmenu] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })

  const openSidebar = () => {
    setIsSidebar(true)
  }

  const closeSidebar = () => {
    setIsSidebar(false)
  }

  const openSubmenu = (text, coordinates) => {
    const findPage = sublinks.find((item) => item.page === text)
    setPage(findPage)
    setLocation(coordinates)
    setIsSubmenu(true)
  }

  const closeSubmenu = () => {
    setIsSubmenu(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebar,
        isSubmenu,
        location,
        page,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
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
