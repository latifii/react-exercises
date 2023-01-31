import { createSlice } from '@reduxjs/toolkit'
import data from '../../data'

const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
})

export default cartSlice.reducer
