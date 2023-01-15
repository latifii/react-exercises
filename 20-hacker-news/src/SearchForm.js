import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  return (
    <form className='search-form'>
      <h2>search hacker news</h2>
      <input type='text' className='form-input' />
    </form>
  )
}

export default SearchForm
