import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { SectionQuickAdd } from './SectionQuickAdd'

export const IntroScreen = () => {
  return (
    <Box>
      <Typography variant='h1' textAlign='center' marginY={4}>
        Journal
      </Typography>
      <Typography variant='body1' textAlign='justify'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ab a
        accusamus quod placeat id exercitationem. Distinctio accusamus
        blanditiis animi assumenda neque mollitia alias corporis, iure illum
        odio similique maxime.
      </Typography>
      <SectionQuickAdd />
    </Box>
  )
}
