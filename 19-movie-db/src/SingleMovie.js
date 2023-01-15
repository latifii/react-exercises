import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
// import { API_ENDPOINT } from './context'
import useFetch from './useFetch'

const SingleMovie = () => {
  const { id } = useParams()
  const { loading, data } = useFetch(`&i=${id}`)

  if (loading) {
    return <div className='loading'></div>
  }
  const { Title, Poster, Year, Plot } = data
  return (
    <section className='single-movie'>
      <img src={Poster} alt={Title} />

      <div className='single-movie-info'>
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <Link className='btn' to='/'>
          back to movies
        </Link>
      </div>
    </section>
  )
}
export default SingleMovie
