import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, type, hexColor }) => {
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])

  const copyClipBoard = () => {
    setAlert(true)
    navigator.clipboard.writeText(hexValue)
  }

  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`
  return (
    <article
      className={`${type === 'shade' ? 'color-light' : ''} color `}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={copyClipBoard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copy to clipboard</p>}
    </article>
  )
}

export default SingleColor
