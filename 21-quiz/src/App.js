import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const {
    waiting,
    loading,
    questions,
    error,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext()

  if (waiting) {
    return <SetupForm />
  }
  if (loading) {
    return <Loading />
  }
  const { question, correct_answer, incorrect_answers } = questions[index]
  // const answers = [...incorrect_answers, correct_answer]
  const random = Math.floor(Math.random() * 4)
  let answers = [...incorrect_answers]
  if (random === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[random])
    answers[random] = correct_answer
  }
  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers : {correct}/{index}
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {answers.map((answer, index) => {
              return (
                <button
                  className='answer-btn'
                  key={index}
                  onClick={() => checkAnswer(answer === correct_answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              )
            })}
          </div>
        </article>
        <button className='next-question' onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  )
}

export default App
