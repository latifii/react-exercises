import React, { useState, useEffect } from 'react'
import Alert from './Alert'
import List from './List'

const getLocalStorage = () => {
  const list = localStorage.getItem('list')

  if (list) {
    return JSON.parse(list)
  } else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage)
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isEditing && name) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, name }
          } else {
            return item
          }
        })
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'edit success')
    } else {
      const newList = { id: new Date().getTime().toString(), name }
      setName('')
      setList((list) => {
        return [...list, newList]
      })
      setIsEditing(false)
      setEditID(null)
      showAlert(true, 'success', 'add grocery')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const removeHandler = (id) => {
    setList(list.filter((item) => item.id !== id))
    showAlert(true, 'danger', 'remove item')
  }

  const editHandler = (id) => {
    const findEdit = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(findEdit.name)
  }

  const removeAllHandler = () => {
    showAlert(true, 'danger', 'remove all items')
    setList([])
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} list={list} showAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            type='submit'
            className={`submit-btn ${!name ? 'disabled' : ''}`}
            disabled={!name}
          >
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        {list.map((item) => {
          return (
            <List
              key={item.id}
              {...item}
              removeList={removeHandler}
              editList={editHandler}
            />
          )
        })}
        {!!list.length && (
          <button className='clear-btn' onClick={removeAllHandler}>
            clear items
          </button>
        )}
      </div>
    </section>
  )
}

export default App
