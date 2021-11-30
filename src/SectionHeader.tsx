import { Typography } from '@mui/material'
import React from 'react'
import { useGoUp, useHeading } from './Section.util'

export const SectionHeader = () => {
  const heading = useHeading()
  const goUp = useGoUp()

  if (!heading) return null
  return (
    <Typography variant='h1' onClick={goUp}>
      {heading}
    </Typography>
  )
}
