/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'

function App() {
  const dispatch = useDispatch()
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isModal } = useSelector((store) => store.modal)
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      {isModal && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
