import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()

  return (
    <div className='btn-container'>
      <button disabled={isLoading} onClick={() => handlePage('prev')}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage('next')}>
        next
      </button>
    </div>
  )
}

export default Buttons
