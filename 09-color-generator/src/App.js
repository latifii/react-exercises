import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#c56cf0').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setError(false)
      setList(colors)
      console.log(colors)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((item, index) => {
          return <SingleColor {...item} key={index} hexColor={item.hex} />
        })}
      </section>
    </>
  )
}

export default App
