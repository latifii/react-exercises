import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import data from '../../data'
const url = 'https://course-api.com/react-useReducer-cart-project'

export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
  try {
    const resp = await axios(url)
    return resp.data
  } catch (error) {
    console.log('err', error)
  }
})

const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
    },

    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id)
      cartItem.amount = cartItem.amount + 1
    },

    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id)
      cartItem.amount = cartItem.amount - 1
    },

    calculateTotals: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.cartItems = action.payload
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions
export default cartSlice.reducer
