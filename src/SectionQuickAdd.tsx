import { Add } from '@mui/icons-material'
import { IconButton, InputUnstyled } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useAddSection } from './Section.util'
import { StyledInputElement } from './StyledInputElement'

export const SectionQuickAdd = () => {
  const [value, setValue] = useState('')
  const addSection = useAddSection()
  const submit = () => {
    if (!!value) addSection(value)
  }
  return (
    <Box
      display='flex'
      padding='1px 2px 0px'
      width='300px'
      alignItems='center'
      justifyContent='space-between'
      overflow='hidden'
      borderRadius='20px'
      bgcolor='rgb(243, 246, 249)'>
      <InputUnstyled
        components={{ Input: StyledInputElement }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Bereich hinzufügen'
      />

      <IconButton onClick={submit}>
        <Add />
      </IconButton>
    </Box>
  )
}
