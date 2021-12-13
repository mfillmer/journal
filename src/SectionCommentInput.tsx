import { TextField } from '@mui/material'
import React, { FC } from 'react'
import { useSectionComment } from './hooks/useSectionComment'

interface props {
  uuid: string
}
export const SectionCommentInput: FC<props> = ({ uuid }) => {
  const { comment, setComment } = useSectionComment(uuid)
  return (
    <TextField
      sx={{
        width: '100%',
        marginY: 2,
      }}
      label='Notiz'
      minRows={4}
      multiline={true}
      variant='outlined'
      size='small'
      value={comment}
      onChange={(e) => setComment(e.currentTarget.value)}
    />
  )
}
