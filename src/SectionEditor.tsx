import { Close } from '@mui/icons-material'
import {
  Autocomplete,
  Button,
  Drawer,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React, { FC, useState } from 'react'
import { SectionItem } from './redux/sections'
import { useSubmitSection, useItems } from './Section.util'

interface props {
  open?: boolean
  setOpen?: (v: boolean) => void
}

export const SectionEditor: FC<props> = ({
  open = false,
  setOpen = () => {},
}) => {
  const [section, setSection] = useState<SectionItem | null>()
  const [inputValue, setInputValue] = useState('')
  const submit = useSubmitSection()

  return (
    <Drawer variant='persistent' anchor='bottom' open={open}>
      <Stack spacing={2} sx={{ padding: 2 }}>
        <Autocomplete
          renderInput={(params) => <TextField {...params} label='Bereich' />}
          size='small'
          onChange={(e, v) => setSection(v)}
          onInputChange={(e: any, v: string) => {
            setInputValue(v)
          }}
          inputValue={inputValue}
          value={section}
          options={items}
        />
        <Button variant='outlined' onClick={() => submit(inputValue)}>
          <Typography>Speichern</Typography>
        </Button>
        <Button variant='outlined' onClick={() => setOpen(false)}>
          <Typography>Schließen</Typography>
          <Close />
        </Button>
      </Stack>
    </Drawer>
  )
}
