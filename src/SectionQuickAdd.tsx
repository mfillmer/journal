import { Add } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React, { FormEvent, useRef, useState } from 'react'
import { useAddSection } from './Section.util'
import { CustomInput } from './StyledInputElement'

export const SectionQuickAdd = () => {
  const ref = useRef<any>(null)
  const [value, setValue] = useState('')
  const addSection = useAddSection()
  const submit = (e: FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!!value) addSection(value)
    setValue('')
    ref.current?.firstChild?.focus()
  }
  return (
    <form
      onSubmit={submit}
      style={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        display='flex'
        padding='1px 2px 0px'
        width='300px'
        alignItems='center'
        justifyContent='space-between'
        overflow='hidden'
        borderRadius='20px'
        bgcolor='rgb(243, 246, 249)'>
        <CustomInput
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Bereich hinzufügen'
        />
        <IconButton type='submit'>
          <Add />
        </IconButton>
      </Box>
    </form>
  )
}
