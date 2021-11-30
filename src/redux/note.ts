import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface notePayload {
  content: string
  date: string
}

const noteSlice = createSlice({
  name: 'note',
  initialState: {} as { [date: string]: string },
  reducers: {
    setNote: (state, action: PayloadAction<notePayload>) => {
      state[action.payload.date] = action.payload.content
    },
  },
})

export const noteReducer = noteSlice.reducer
export const { setNote } = noteSlice.actions
