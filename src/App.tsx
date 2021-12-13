import { Container } from '@mui/material'
import React from 'react'
import { IntroScreen } from './IntroScreen'
import { Journal } from './Journal'
import { useAppSelector } from './redux/store'

const App = () => {
  const sections = useAppSelector((state) =>
    Object.values(state.sections.items)
  )
  const isUsed = sections.length > 0
  return (
    <Container maxWidth='sm' sx={{ padding: 2 }}>
      {isUsed ? <Journal /> : <IntroScreen />}
    </Container>
  )
}

export default App
