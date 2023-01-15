import React, { useEffect, useState } from 'react'
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState({ show: false, msg: '' })

  const movieFetch = async (url) => {
    setLoading(true)
    try {
      const resp = await fetch(url)
      const dataApi = await resp.json()
      if (dataApi.Response === 'True') {
        setData(dataApi.Search || dataApi)
        setError({ show: false, msg: '' })
      } else {
        setError({ show: true, msg: dataApi.Error })
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    movieFetch(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams])
  return { loading, data, error }
}

export default useFetch
