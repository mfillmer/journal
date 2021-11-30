import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDate } from './redux/date'
import { useAppSelector } from './redux/store'

export const useCurrentDate = () => {
  const dispatch = useDispatch()
  const utcDate = useAppSelector((state) => state.date)
  const date = new Date(utcDate)
  const navigate = (delta: number) => () => {
    const newDate = date.setDate(date.getDate() + delta)
    dispatch(setDate(newDate.toString()))
  }

  return { date, goForward: navigate(1), goBack: navigate(-1) }
}
