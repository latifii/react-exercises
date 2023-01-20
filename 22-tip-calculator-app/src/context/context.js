import React, { useContext, useState, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [bill, setBill] = useState('')
  const [tip, setTip] = useState(5)
  const [people, setPeople] = useState(0)
  const [inputCustom, setInputCustom] = useState('')
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)

  const clickBtnTip = (value) => {
    setTip(value)
    setInputCustom('')
  }

  const changeCustom = (e) => {
    const value = e.target.value
    if (value >= 0 && value <= 100) {
      setInputCustom(e.target.value)
      setTip(0)
    } else {
      setInputCustom(0)
    }
  }

  const billChange = (e) => {
    return setBill(e.target.value)
  }

  const tipAmountHandler = () => {
    if (people > 0) {
      let result
      if (tip) {
        result = (bill * (tip / 100)) / people
      } else {
        result = (bill * (inputCustom / 100)) / people
      }
      setTipAmount(result)
    } else {
      return setTipAmount(0)
    }
  }

  const totalHandler = () => {
    if (people > 0) {
      const calc = bill / people
      const result = calc + tipAmount
      setTotal(result)
    } else {
      return setTotal(0)
    }
  }
  const resetCalc = () => {
    setBill('')
    setTip(5)
    setPeople(0)
    setInputCustom('')
    setTipAmount(0)
    setTotal(0)
  }
  useEffect(() => {
    tipAmountHandler()
    totalHandler()
  }, [people, tip, bill, totalHandler])

  return (
    <AppContext.Provider
      value={{
        bill,
        billChange,
        clickBtnTip,
        inputCustom,
        changeCustom,
        tipAmount,
        total,
        resetCalc,
        people,
        setPeople,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
