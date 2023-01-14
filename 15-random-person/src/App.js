import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  const [title, setTitle] = useState('name')
  const [value, setValue] = useState('random name')

  const userFetch = async () => {
    setLoading(true)

    const resp = await fetch(url)
    const { results } = await resp.json()
    const {
      name: { first, last },
      location: {
        street: { name },
      },
      dob: { age },
      login: { password },
      email,
      phone,
      picture: { large },
    } = results[0]

    const newUser = {
      name: `${first} ${last}`,
      street: name,
      age,
      password,
      email,
      phone,
      picture: large,
    }
    setUser(newUser)
    setLoading(false)
    setTitle('name')
    setValue(newUser.name)
  }

  const showDetail = (e) => {
    const attr = e.currentTarget.getAttribute('data-label')
    setTitle(attr)
    setValue(user[`${attr}`])
  }

  useEffect(() => {
    userFetch()
  }, [])

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src={user ? user.picture : defaultImage}
            alt='random user'
            className='user-img'
          />
          <p className='user-title'>My {title} is</p>
          <p className='user-value'>{value}</p>
          <div className='values-list'>
            <button className='icon' data-label='name' onMouseOver={showDetail}>
              <FaUser />
            </button>
            <button
              className='icon'
              data-label='email'
              onMouseOver={showDetail}
            >
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label='age' onMouseOver={showDetail}>
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              data-label='street'
              onMouseOver={showDetail}
            >
              <FaMap />
            </button>
            <button
              className='icon'
              data-label='phone'
              onMouseOver={showDetail}
            >
              <FaPhone />
            </button>
            <button
              className='icon'
              data-label='password'
              onMouseOver={showDetail}
            >
              <FaLock />
            </button>
          </div>
          <button className='btn' type='button' onClick={userFetch}>
            {loading ? 'Loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
