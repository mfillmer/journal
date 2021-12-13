import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

export interface SectionItem {
  uuid: string
  label: string
  parent: string
}

interface State {
  [key: string]: SectionItem
}

const initialState = {} as State

const sectionSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    addSection: (
      state,
      action: PayloadAction<{ label: string; parent?: string }>
    ) => {
      const uuid = v4()
      const parent = action.payload.parent || ''
      const label = action.payload.label
      state[uuid] = { uuid, parent, label }
    },
  },
})

export const sectionReducer = sectionSlice.reducer
export const { addSection } = sectionSlice.actions
