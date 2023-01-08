import React from 'react'
import Tour from './Tour'

const Tours = ({ tours,removeCard }) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeCard={removeCard} />
        })}
      </div>
    </section>
  )
}

export default Tours
