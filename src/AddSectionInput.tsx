import { Button, TextField } from '@mui/material'
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
    <div>
      <TextField
        variant='outlined'
        type='text'
        size='small'
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <Button variant='outlined' onClick={onSubmit}>
        Bereich hinzufügen
      </Button>
    </div>
  )
}
