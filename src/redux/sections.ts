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
    upsertSection: (
      state,
      action: PayloadAction<{ label: string; uuid?: string }>
    ) => {
      console.log(action.payload)
      const path = state.path
      const uuid = action.payload.uuid || v4()
      state.items[uuid] = { path, uuid, label: action.payload.label }
    },
    setPath: (state, action: PayloadAction<string>) => {
      state.path = action.payload
    },
  },
})

export const sectionReducer = sectionSlice.reducer
export const { upsertSection, setPath } = sectionSlice.actions
