import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

export interface SectionItem {
  uuid: string
  name: string
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
    addSection: (state, action: PayloadAction<string>) => {
      const path = state.path
      const uuid = v4()
      state.items[uuid] = { path, uuid, name: action.payload }
    },
    setPath: (state, action: PayloadAction<string>) => {
      state.path = action.payload
    },
  },
})

export const sectionReducer = sectionSlice.reducer
export const { addSection, setPath } = sectionSlice.actions
