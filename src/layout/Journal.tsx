import { Stack } from '@mui/material'
import React from 'react'
import { Breadcrumbs } from './Breadcrumbs'
import { DateView } from './DateView'
import { SectionHeader } from '../section/SectionHeader'
import { SectionList } from '../section/SectionList'
import { SectionQuickAdd } from '../section/SectionQuickAdd'
import { SectionRating } from '../section/SectionRating'

export const Journal = () => (
  <Stack alignItems='stretch'>
    <DateView />
    <Breadcrumbs />
    <SectionHeader />
    <SectionList />
    <SectionRating />
    <SectionQuickAdd />
  </Stack>
)
