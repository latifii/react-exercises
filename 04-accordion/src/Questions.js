import React from 'react'

import SingleQuestion from './Question'

const Questions = (props) => {
  return (
    <div className='container'>
      <h3>questions and answers about login</h3>
      <section className='info'>
        {props.data.map((question) => {
          return <SingleQuestion {...question} key={question.id} />
        })}
      </section>
    </div>
  )
}

export default Questions
