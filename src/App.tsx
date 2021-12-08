import { Container } from '@mui/material'
import React from 'react'
import { AddSectionInput } from './AddSectionInput'
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
    <AddSectionInput />
    <SectionList />
    <SectionRating />
    <Note />
  </Container>
)

export default App
