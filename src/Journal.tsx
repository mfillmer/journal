import { Stack } from '@mui/material'
import React from 'react'
import { Breadcrumbs } from './Breadcrumbs'
import { DateView } from './DateView'
import { SectionHeader } from './SectionHeader'
import { SectionList } from './SectionList'
import { SectionQuickAdd } from './SectionQuickAdd'
import { SectionRating } from './SectionRating'

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
