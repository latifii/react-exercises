import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { calculateTotals } from './features/cart/cartSlice'

function App() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((store) => store.cart)

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
