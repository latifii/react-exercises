import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)

  const { job, image, name, text } = people[index]

  const checkNum = (num) => {
    if (num > people.length - 1) {
      return 0
    }

    if (num < 0) {
      return people.length - 1
    }

    return num
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNum(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNum(newIndex)
    })
  }
  
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  }

  const randomPerson = () => {
    let newIndex = getRandomInt(people.length)
    console.log(newIndex)
    if (newIndex === index) {
      newIndex = index + 1
    }
    setIndex(checkNum(newIndex))
  }
  return (
    <section className='container'>
      <div className='title'>
        <h2>our reviews</h2>
        <div className='underline'></div>
      </div>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='prev-btn'>
            <FaChevronLeft onClick={prevPerson} />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </section>
  )
}

export default Review
