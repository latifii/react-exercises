import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
// const Access Key = `Odj3gH_qVK7ArX7Ta_SvWt_xnahdmfh5TVRob3AzwTA`
const mainUrl = `https://api.unsplash.com/photos/`
// const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setloading] = useState(true)
  const [photos, setPhotos] = useState([])

  const fetchImages = async () => {
    setloading(true)
    try {
      const resp = await fetch(`${mainUrl}${clientID}`)
      const data = await resp.json()
      setPhotos(data)
      setloading(false)
      console.log(data)
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])
  if (loading) return <div>Loading...</div>

  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input
            type='text'
            placeholder='search'
            className='form-input'
            // value=''
          />
          <button type='submit' className='submit-btn'>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((item) => {
            return <Photo key={item.id} {...item} />
          })}
        </div>
        {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  )
}

export default App
