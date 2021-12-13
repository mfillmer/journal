import React from 'react'
import { DateView } from './DateView'
import { Note } from './Note'
import { SectionHeader } from './SectionHeader'
import { SectionList } from './SectionList'
import { SectionQuickAdd } from './SectionQuickAdd'
import { SectionRating } from './SectionRating'

export const Journal = () => (
  <>
    <DateView />
    <SectionHeader />
    <SectionList />
    <SectionRating />
    <Note />
    <SectionQuickAdd />
  </>
)
