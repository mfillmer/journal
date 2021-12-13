import { Container } from '@mui/material'
import React from 'react'
import { IntroScreen } from './IntroScreen'
import { Journal } from './Journal'
import { useSections } from './Section.util'

const App = () => {
  const sections = useSections()
  return (
    <Container maxWidth='sm' sx={{ padding: 2 }}>
      {!!sections.length ? <Journal /> : <IntroScreen />}
    </Container>
  )
}

export default App
