import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import logger from 'redux-logger'
import { dateReducer } from './date'
import { noteReducer } from './note'
import { ratingReducer } from './ratings'
import { sectionReducer } from './sections'
import { uiReducer } from './ui'

const getPersistedState = () => {
  try {
    const raw = localStorage.getItem('state') || ''
    if (process.env.NODE_ENV === 'development') return undefined
    return JSON.parse(raw)
  } catch {
    return undefined
  }
}

const persistState = (state = {}) => {
  localStorage.setItem('state', JSON.stringify(state))
}

export const store = configureStore({
  reducer: {
    sections: sectionReducer,
    ratings: ratingReducer,
    date: dateReducer,
    note: noteReducer,
    ui: uiReducer,
  },
  preloadedState: { ...getPersistedState(), date: Date.now() },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

store.subscribe(() => {
  persistState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
