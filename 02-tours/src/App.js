import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      let response = await fetch(url)
      let data = await response.json()
      setTours(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  // Remove Card
  const removeCardHandler = (id) => {
    const newTours = tours.filter((item) => item.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  // Loading Component
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  // Tours Component
  return (
    <main>
      <Tours tours={tours} removeCard={removeCardHandler} />
    </main>
  )
}

export default App
