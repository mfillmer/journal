import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

interface Rating {
  uuid?: string
  date: string
  value: number
  sectionUuid: string
}

const initialState = {} as { [key: string]: Rating }

const ratingSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {
    setRating: (state, action: PayloadAction<Rating>) => {
      const uuid = v4()
      state[uuid] = { ...action.payload, uuid }
    },
  },
})

export const { setRating } = ratingSlice.actions
export const ratingReducer = ratingSlice.reducer
