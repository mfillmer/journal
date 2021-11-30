import { Button, ButtonGroup, Chip, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { useSectionRating } from './Rating.utils'

interface props {
  uuid: string
}

export const SectionRatingInput: FC<props> = ({ uuid }) => {
  const items = Array(4).fill(0)
  const { comment, rating, setRating, setComment } = useSectionRating(uuid)

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '>*': { marginRight: 2 },
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {rating !== undefined && (
        <Chip onClick={() => setRating('')} label={rating} />
      )}
      <ButtonGroup
        variant='outlined'
        aria-label='outlined primary button group'
      >
        {rating === undefined &&
          items.map((_, index) => (
            <Button
              variant='outlined'
              onClick={() => setRating(index)}
              key={index}
            >
              {index}
            </Button>
          ))}
      </ButtonGroup>
      {rating >= 0 && (
        <TextField
          variant='outlined'
          size='small'
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
        />
      )}
    </Box>
  )
}
