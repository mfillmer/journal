import { Add } from '@mui/icons-material'
import { IconButton, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useAddSection } from './Section.util'

export const SectionQuickAdd = () => {
  const [value, setValue] = useState('')
  const addSection = useAddSection()
  const submit = () => {
    if (!!value) addSection(value)
  }
  return (
    <Box marginY={2} marginX='auto' width='200px' display='flex'>
      <TextField value={value} onChange={(e) => setValue(e.target.value)}>
        Bereich hinzufügen
      </TextField>
      <IconButton onClick={submit}>
        <Add />
      </IconButton>
    </Box>
  )
}
