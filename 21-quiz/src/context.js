import axios from 'axios'
import React, { useState, useContext } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

// const temp_url =
//   'https://opentdb.com/api.php?amount=6&category=21&difficulty=medium'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [error, setError] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy',
  })

  const fetchQuestions = async (url) => {
    setWaiting(true)
    setLoading(false)
    const resp = await axios(url).catch((err) => console.log(err))
    console.log(resp)
    if (resp) {
      const data = resp.data.results
      if (data.length > 0) {
        setWaiting(false)
        setLoading(false)
        setQuestions(data)
        setError(false)
      } else {
        setError(true)
        setWaiting(true)
      }
    } else {
      setWaiting(true)
    }
  }

  const changeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuiz({ ...quiz, [name]: value })
  }

  const submitHandler = (e) => {
    const { amount, category, difficulty } = quiz
    console.log('cat', table[category])
    e.preventDefault()
    const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`
    fetchQuestions(url)
  }

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1
      if (index > questions.length - 1) {
        openModal()
        return 0
      }
      return index
    })
  }

  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1)
    }
    nextQuestion()
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCorrect(0)
    setWaiting(true)
  }

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModalOpen,
        quiz,
        nextQuestion,
        checkAnswer,
        closeModal,
        changeHandler,
        submitHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
