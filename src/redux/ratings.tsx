import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getRatingId } from './getRatingId'

interface Rating {
  date: string
  value: number
  comment: string
  section: string
}

const initialState = {} as { [key: string]: Rating }

const ratingSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {
    setRating: (state, action: PayloadAction<Rating>) => {
      const { date, section } = action.payload
      const id = getRatingId(date, section)
      state[id] = { ...action.payload }
    },
  },
})

export const { setRating } = ratingSlice.actions
export const ratingReducer = ratingSlice.reducer
