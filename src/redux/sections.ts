import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

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
    addSection: (state, action: PayloadAction<string>) => {
      const uuid = v4()
      const path = state.path
      const label = action.payload
      state.items[uuid] = { uuid, path, label }
    },
  },
})

export const sectionReducer = sectionSlice.reducer
export const { addSection, setPath } = sectionSlice.actions
