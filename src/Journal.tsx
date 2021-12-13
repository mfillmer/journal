import { Stack } from '@mui/material'
import React from 'react'
import { DateView } from './DateView'
import { Note } from './Note'
import { SectionHeader } from './SectionHeader'
import { SectionList } from './SectionList'
import { SectionQuickAdd } from './SectionQuickAdd'
import { SectionRating } from './SectionRating'

export const Journal = () => (
  <Stack alignItems='stretch'>
    <DateView />
    <SectionHeader />
    <SectionList />
    <SectionRating />
    <Note />
    <SectionQuickAdd />
  </Stack>
)
