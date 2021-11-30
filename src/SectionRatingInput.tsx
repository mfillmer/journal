import { Button, ButtonGroup, Chip, TextField } from '@mui/material'
import React, { FC } from 'react'
import { useSectionRating } from './Rating.utils'

interface props {
  uuid: string
}

export const SectionRatingInput: FC<props> = ({ uuid }) => {
  const items = Array(4).fill(0)
  const { comment, rating, setRating, setComment } = useSectionRating(uuid)

  return (
    <div onClick={(e) => e.stopPropagation()}>
      {!!rating && <Chip onClick={() => setRating('')} label={rating} />}
      <ButtonGroup
        variant='outlined'
        aria-label='outlined primary button group'
      >
        {!rating &&
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
    </div>
  )
}
