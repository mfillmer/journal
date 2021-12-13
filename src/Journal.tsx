import React from 'react'
import { SectionEditorToggle } from './SectionEditorToggle'
import { DateView } from './DateView'
import { Note } from './Note'
import { SectionHeader } from './SectionHeader'
import { SectionRating } from './SectionRating'
import { SectionList } from './SectionList'

export const Journal = () => (
  <>
    <DateView />
    <SectionHeader />
    <SectionEditorToggle />
    <SectionList />
    <SectionRating />
    <Note />
  </>
)
