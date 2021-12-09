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
      action: PayloadAction<{ label: string; uuid?: string; isChild: boolean }>
    ) => {
      if (action.payload.uuid && action.payload.isChild) {
        const item = state.items[action.payload.uuid]
        const path = [item.path, item.label].join('/')
        const label = action.payload.label
        const uuid = v4()
        state.items[uuid] = { path, uuid, label }
      } else {
        const path = state.path
        const uuid = action.payload.uuid || v4()
        state.items[uuid] = { path, uuid, label: action.payload.label }
      }
    },
    setPath: (state, action: PayloadAction<string>) => {
      state.path = action.payload
    },
  },
})

export const sectionReducer = sectionSlice.reducer
export const { upsertSection, setPath } = sectionSlice.actions
