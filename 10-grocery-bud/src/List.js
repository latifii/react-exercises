import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ name, id, removeList, editList }) => {
  return (
    <div className='grocery-list'>
      <article className='grocery-item'>
        <p className='title'>{name}</p>
        <div className='btn-container'>
          <button
            type='button'
            className='edit-btn'
            onClick={() => editList(id)}
          >
            <FaEdit />
          </button>
          <button
            type='button'
            className='delete-btn'
            onClick={() => removeList(id)}
          >
            <FaTrash />
          </button>
        </div>
      </article>
    </div>
  )
}
export default List
