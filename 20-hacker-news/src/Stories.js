import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { hits, isLoading, removeStory } = useGlobalContext()
  if (isLoading) {
    return <div className='loading'></div>
  }

  return (
    <section className='stories'>
      {hits.map((hit) => {
        const { title, points, objectID, num_comments, url, author } = hit
        return (
          <article key={objectID} className='story'>
            <h4 className='title'>{title}</h4>
            <p className='info'>
              {points} points by <span>{author} | </span> {num_comments}{' '}
              comments
            </p>
            <div>
              <a
                href={url}
                className='read-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                read more
              </a>
              <button
                className='remove-btn'
                onClick={() => removeStory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories
