import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const { loading, data } = useGlobalContext()
  if (loading) {
    return <div className='loading'></div>
  }
  return (
    <section className='movies'>
      {data.map((movie) => {
        return (
          <Link
            className='movie'
            key={movie.imdbID}
            to={`/movies/${movie.imdbID}`}
          >
            <article>
              <img
                src={`${movie.Poster === 'N/A' ? url : movie.Poster}`}
                alt={movie.Title}
              />
              <div className='movie-info'>
                <h4 className='title'>{movie.Title}</h4>
                <p>{movie.Year}</p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies
