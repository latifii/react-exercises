import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { query, error, setQuery } = useGlobalContext()
  console.log('erorr', error)
  const searchHandler = (e) => {
    return setQuery(e.target.value)
  }
  return (
    <form className='search-form'>
      <h2>search movies</h2>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={searchHandler}
      />
      {error.show && <p className='error'>{error.msg}</p>}
    </form>
  )
}

export default SearchForm
