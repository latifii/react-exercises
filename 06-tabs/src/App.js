import React, { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)
  const [loading, setLoading] = useState(true)
  const tabFetch = async () => {
    // setLoading(true)

    const reponse = await fetch(url)
    const newJobs = await reponse.json()
    console.log(newJobs)
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    tabFetch()
  }, [])
  if (loading) {
    return (
      <section className='section loading'>
        <h2>Loading...</h2>
      </section>
    )
  }

  const { title, dates, duties, company } = jobs[value]
  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => {
            return (
              <button
                className={`job-btn ${value === index && 'active-btn' }`}
                key={job.id}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{jobs[value].company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((item, index) => {
            return (
              <div className='job-desc' key={index}>
                <FaAngleDoubleRight />
                <p>{item}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type='button' className='btn'>
        more info
      </button>
    </section>
  )
}

export default App
