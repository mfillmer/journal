import { Button, ButtonGroup, Chip } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { useSectionRating } from './Rating.utils'

interface props {
  uuid: string
}

export const SectionRatingInput: FC<props> = ({ uuid }) => {
  const items = Array(4).fill(0)
  const { rating, setRating } = useSectionRating(uuid)

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
        <Chip onClick={() => setRating(undefined)} label={rating} />
      )}
      <ButtonGroup variant='outlined'>
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
    </Box>
  )
}
