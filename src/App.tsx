import { Box } from '@mui/system'
import React from 'react'
import './App.css'
import { DateView } from './DateView'
import { Note } from './Note'
import { SectionView } from './SectionView'

const App = () => (
  <Box
    sx={{
      marginTop: 2,
      marginX: 'auto',
      maxWidth: 600,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <DateView />
    <SectionView />
    <Note />
  </Box>
)

export default App
