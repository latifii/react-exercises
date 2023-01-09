import React, { useEffect } from 'react'

const Alert = ({ type, msg, list, showAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list])

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
