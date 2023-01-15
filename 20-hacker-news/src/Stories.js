import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { hits, isLoading } = useGlobalContext()
  if (isLoading) {
    return <div className='loading'></div>
  }

  return (
    <section className='stories'>
      {hits.map((hit) => {
        const { title, points, objectID } = hit
        return (
          <article key={objectID} className='story'>
            <h4 className='title'>{title}</h4>
            <p className='info'>
              {points} points by <span>dwwoelfel | </span> 498 comments
            </p>
            <div>
              <a
                href='https://code.facebook.com/posts/300798627056246'
                className='read-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                read more
              </a>
              <button className='remove-btn'>remove</button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories
