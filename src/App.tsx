import React from 'react'
import './App.css'
import { DateView } from './DateView'
import { Note } from './Note'
import { SectionView } from './SectionView'

const App = () => (
  <div>
    <DateView />
    <SectionView />
    <Note />
  </div>
)

export default App
