import { ArrowBackIos } from '@mui/icons-material'
import { IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { useGoUp, useHeading } from './Section.util'

export const SectionHeader = () => {
  const heading = useHeading()
  const goUp = useGoUp()

  if (!heading) return null
  return (
    <Stack spacing={2} direction='row' onClick={goUp}>
      <IconButton>
        <ArrowBackIos />
      </IconButton>
      <Typography variant='h1'>{heading}</Typography>
    </Stack>
  )
}
