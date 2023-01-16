import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { submitHandler, changeHandler, error, quiz } = useGlobalContext()
  const { amount, category, difficulty } = quiz
  return (
    <section className='quiz quiz-small'>
      <form className='setup-form' onSubmit={submitHandler}>
        <h2>setup quiz</h2>
        <div className='form-control'>
          <label htmlFor='amount'>number of questions</label>
          <input
            type='number'
            name='amount'
            id='amount'
            className='form-input'
            min='1'
            max='50'
            value={amount}
            onChange={changeHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='category'>category</label>
          <select
            name='category'
            id='category'
            className='form-input'
            value={category}
            onChange={changeHandler}
          >
            <option value='sports'>sports</option>
            <option value='history'>history</option>
            <option value='politics'>politics</option>
          </select>
        </div>
        <div className='form-control'>
          <label htmlFor='difficulty'>select difficulty</label>
          <select
            name='difficulty'
            id='difficulty'
            className='form-input'
            value={difficulty}
            onChange={changeHandler}
          >
            <option value='easy'>easy</option>
            <option value='medium'>medium</option>
            <option value='hard'>hard</option>
          </select>
        </div>
        {error && (
          <div className='error'>
            can't generate questions, please try different options
          </div>
        )}
        <button type='submit' className='submit-btn'>
          start
        </button>
      </form>
    </section>
  )
}

export default SetupForm
