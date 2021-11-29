import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { ratingReducer } from './ratings'
import { sectionReducer } from './sections'

export const store = configureStore({
  reducer: {
    sections: sectionReducer,
    ratings: ratingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
