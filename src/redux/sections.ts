import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SectionItem {
  uuid: string
  label: string
  path: string
}

interface State {
  items: { [key: string]: SectionItem }
  path: string
}

const initialState = { items: {}, path: '' } as State

const sectionSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    setPath: (state, action: PayloadAction<string>) => {
      state.path = action.payload
    },
  },
})

export const sectionReducer = sectionSlice.reducer
export const { setPath } = sectionSlice.actions
