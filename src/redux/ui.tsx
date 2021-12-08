import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SectionItem } from './sections'

interface state {
  currentItem: SectionItem | undefined
}

const initialState = {} as state

const uiSlice = createSlice({
  initialState,
  name: 'ui',
  reducers: {
    setItem: (state, action: PayloadAction<SectionItem | undefined>) => {
      state.currentItem = action.payload
    },
  },
})

export const uiReducer = uiSlice.reducer
export const { setItem } = uiSlice.actions
