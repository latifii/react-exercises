import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const { openModal, openSide } = useGlobalContext()
  return (
    <main>
      <button className='sidebar-toggle' onClick={openSide}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        modal ds
      </button>
    </main>
  )
}

export default Home
