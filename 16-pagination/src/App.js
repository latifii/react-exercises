import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { data, loading } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  // console.log(data[0])
  const prevHandler = () => {
    // if (page <= 0) return setPage(data.length)
    // setPage(page - 1)
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }
  const nextHandler = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
    console.log('followers', followers)
  }, [loading, page])

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'Loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers.map((follower, index) => {
            return <Follower key={index} {...follower} />
          })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevHandler}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  className={`page-btn  ${index === page ? 'active-btn' : ''}`}
                  key={index}
                  onClick={() => setPage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextHandler}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
