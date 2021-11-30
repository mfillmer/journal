import { TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useDate } from './DateView.utils'
import { setNote } from './redux/note'
import { useAppSelector } from './redux/store'

export const Note = () => {
  const dispatch = useDispatch()
  const { dateString: date } = useDate()
  const content = useAppSelector((state) => state.note[date]) || ''
  const setContent = (content: string) => dispatch(setNote({ date, content }))
  return (
    <TextField
      sx={{
        width: '100%',
        marginY: 8,
      }}
      label='Notiz'
      multiline={true}
      value={content}
      onChange={(e) => setContent(e.currentTarget.value)}
    />
  )
}
