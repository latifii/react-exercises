import React from 'react'
import { useGlobalContext } from '../context/context'
import iconDollar from '../images/icon-dollar.svg'
import iconPerson from '../images/icon-person.svg'

const Form = () => {
  const {
    bill,
    billChange,
    clickBtnTip,
    inputCustom,
    changeCustom,
    people,
    setPeople,
  } = useGlobalContext()
  const tipData = [
    {
      id: '5%',
      value: 5,
    },
    {
      id: '10%',
      value: 10,
    },
    {
      id: '15%',
      value: 15,
    },
    {
      id: '25%',
      value: 25,
    },
    {
      id: '50%',
      value: 50,
    },
  ]

  return (
    <form>
      {/* Input for Bill Amount   */}
      <label htmlFor='bill' className='bill-label'>
        Bill
      </label>
      <div className='bill-box'>
        <input
          type='number'
          name='bill'
          placeholder='0'
          id='bill'
          className='bill-input'
          value={bill}
          onChange={billChange}
        />
        <img src={iconDollar} alt='dollar-icon' className='dollar-icon' />
      </div>
      <p className='select-tip'>Select Tip %</p>
      <div className='button-box'>
        {tipData.map((item) => {
          const { id, value } = item
          return (
            <button
              type='button'
              key={id}
              value={value}
              id='tip-5'
              onClick={() => clickBtnTip(value)}
            >
              {id}
            </button>
          )
        })}
        <label htmlFor='tip-custom' hidden>
          Custom Tip Percentage
        </label>
        <input
          type='text'
          name='tip-custom'
          id='tip-custom'
          className='tip-custom'
          placeholder='Custom'
          min={1}
          max={100}
          value={inputCustom}
          onChange={changeCustom}
        />
      </div>
      {/* Input for Number of People   */}
      <div className='people-box'>
        <label htmlFor='people' className='label'>
          Number of People
        </label>
        {people === 0 && (
          <small id='error' className='error'>
            Can't be zero
          </small>
        )}
        <input
          type='text'
          name='people'
          id='people'
          placeholder='0'
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
        />
        <img src={iconPerson} alt='person-icon' className='person-icon' />
      </div>
    </form>
  )
}

export default Form
