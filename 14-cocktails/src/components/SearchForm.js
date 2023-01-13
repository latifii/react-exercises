import React, { useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')
  const searchInput = () => {
    setSearchTerm(searchValue.current.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={searchInput}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
