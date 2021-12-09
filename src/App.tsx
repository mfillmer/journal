import { Container } from '@mui/material'
import React from 'react'
import { SectionEditorToggle } from './SectionEditorToggle'
import './App.css'
import { DateView } from './DateView'
import { Note } from './Note'
import { SectionHeader } from './SectionHeader'
import { SectionRating } from './SectionRating'
import { SectionList } from './SectionList'

const App = () => (
  <Container maxWidth='sm' sx={{ padding: 2 }}>
    <DateView />
    <SectionHeader />
    <SectionEditorToggle />
    <SectionList />
    <SectionRating />
    <Note />
  </Container>
)

export default App
