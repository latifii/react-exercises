import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  isLoading: true,
  hits: [],
  page: 0,
  query: 'react',
  nbPages: 0,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const fetchNews = async (url) => {
    dispatch({ type: SET_LOADING })
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNews(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
  }, [])
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
