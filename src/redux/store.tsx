import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import logger from 'redux-logger'
import { dateReducer } from './date'
import { ratingReducer } from './ratings'
import { sectionReducer } from './sections'

export const store = configureStore({
  reducer: {
    sections: sectionReducer,
    ratings: ratingReducer,
    date: dateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
