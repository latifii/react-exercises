import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const [pepole, setPepole] = useState(data)
  const clearHandler = () =>{
    setPepole([])
  }
  return (
    <main>
      <section className='container'>
        <h3>{pepole.length} birthdays today</h3>
        <List pepole={pepole} />
        <button onClick={clearHandler}>Clear all</button>
      </section>
    </main>
  )
}

export default App
