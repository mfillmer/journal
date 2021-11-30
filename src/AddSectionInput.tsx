import { Button, TextField, Box } from '@mui/material'
import React, { useState } from 'react'
import { useAdd } from './Section.util'

export const AddSectionInput = () => {
  const [value, setValue] = useState('')
  const add = useAdd(value)
  const reset = () => setValue('')
  const onSubmit = () => {
    add()
    reset()
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        marginY: 2,
        width: '100%',
      }}
    >
      <TextField
        label='neuer Bereich'
        variant='outlined'
        type='text'
        sx={{ marginRight: 2 }}
        size='small'
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <Button variant='outlined' onClick={onSubmit}>
        hinzufügen
      </Button>
    </Box>
  )
}
