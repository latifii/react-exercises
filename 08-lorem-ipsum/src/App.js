import React, { useState } from 'react'
import data from './data'

function App() {
  const [amount, setAmount] = useState(0)
  const [paragraphs, setParagraphs] = useState([])

  const handleForm = (e) => {
    e.preventDefault()
    console.log(data.length)

    if (amount >= 0 && amount <= data.length) {
      setParagraphs(data.slice(0, amount))
      
    }
  }

  const amountChange = (e) => {
    let value = e.target.value
    if ((value) >= 0 && value <= data.length) {
      setAmount(value)
    }else{
     return
    }
  }

  const showP = data.slice(0, paragraphs)

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleForm}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={amount}
          onChange={amountChange}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {paragraphs.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
        <p></p>
      </article>
    </section>
  )
}

export default App
