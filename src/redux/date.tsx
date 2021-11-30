import { createSlice } from '@reduxjs/toolkit'

const navigate = (val: number, delta: number) => {
  const date = new Date(val)
  date.setDate(date.getDate() + delta)
  return date.getTime()
}

const dateSlice = createSlice({
  name: 'date',
  initialState: Date.now(),
  reducers: {
    goForward: (state) => navigate(state, 1),
    goBack: (state) => navigate(state, -1),
  },
})

export const dateReducer = dateSlice.reducer
export const { goBack, goForward } = dateSlice.actions
