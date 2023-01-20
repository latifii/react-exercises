import React from 'react'
import { useGlobalContext } from '../context/context'

const ShowResults = () => {
  const { tipAmount, total, resetCalc } = useGlobalContext()
  return (
    <div className='calculator'>
      <div className='box bottom'>
        <div className='label tip-amount'>
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <p className='result tip_pp' id='tip-amount_pp'>
          <span className='dollar-sign'>$</span>
          {tipAmount.toFixed(2)}
        </p>
      </div>
      <div className='box second-bottom'>
        <div className='label total'>
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p className='result total_pp' id='total-amount_pp'>
          <span className='dollar-sign'>$</span>
          {total.toFixed(2)}
        </p>
      </div>
      <button type='reset' className='reset-button' onClick={resetCalc}>
        Reset
      </button>
    </div>
  )
}

export default ShowResults
