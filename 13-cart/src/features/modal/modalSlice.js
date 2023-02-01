import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModal: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModal = true
    },
    closeModal: (state) => {
      state.isModal = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
