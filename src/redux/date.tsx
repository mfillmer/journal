import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const dateSlice = createSlice({
  name: 'date',
  initialState: (new Date()).toString(),
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state = action.payload
    },
  },
})

export const dateReducer = dateSlice.reducer
export const { setDate } = dateSlice.actions
