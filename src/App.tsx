import { Box } from '@mui/system'
import React from 'react'
import './App.css'
import { DateView } from './DateView'
import { Note } from './Note'
import { SectionView } from './SectionView'
import '@material-tailwind/react/tailwind.css'

const App = () => (
  <Box
    sx={{
      padding: 1,
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
