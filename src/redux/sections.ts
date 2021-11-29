import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SectionItem {
  uuid: string
  name: string
  path: string
}

interface State {
  items: SectionItem[]
  path: string
}

const initialState = { items: [], path: '' } as State

const sectionSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    addSection: (state, action: PayloadAction<SectionItem>) => {
      state.items.push(action.payload)
    },
    setPath: (state, action:PayloadAction<string>) => {
        state.path = action.payload
    }
  },
})

export const sectionReducer = sectionSlice.reducer
export const { addSection, setPath } = sectionSlice.actions
