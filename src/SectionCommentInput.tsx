import { TextField } from '@mui/material'
import React, { FC } from 'react'
import { useSectionComment } from './Rating.utils'

interface props {
  uuid: string
}
export const SectionCommentInput: FC<props> = ({ uuid }) => {
  const { comment, setComment } = useSectionComment(uuid)
  return (
    <TextField
      variant='outlined'
      size='small'
      value={comment}
      onChange={(e) => setComment(e.currentTarget.value)}
    />
  )
}
