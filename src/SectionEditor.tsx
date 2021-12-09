import { Close } from '@mui/icons-material'
import {
  Button,
  Checkbox,
  Drawer,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React, { FC, useState } from 'react'
import { useItems, useSubmitSection } from './Section.util'

interface props {
  open?: boolean
  setOpen?: (v: boolean) => void
}

export const SectionEditor: FC<props> = ({
  open = false,
  setOpen = () => {},
}) => {
  const [value, setValue] = useState<string>('')
  const [uuid, setUuid] = useState<string>('')
  const [isChild, setIsChild] = useState(false)
  const items = useItems()
  const submit = useSubmitSection(value, uuid, isChild)

  const onSubmit = () => {
    submit()
    setValue('')
    setUuid('')
    setIsChild(false)
    setOpen(false)
  }

  return (
    <Drawer variant='persistent' anchor='bottom' open={open}>
      <Stack spacing={2} sx={{ padding: 2 }}>
        <FormControl>
          <InputLabel id='section'>Bereich wählen</InputLabel>
          <Select
            label='Bereich wählen'
            disabled={!items.length}
            value={uuid}
            onChange={(e) => setUuid(e.target.value)}
            labelId='section'>
            {items.map((i) => (
              <MenuItem value={i.uuid}>{i.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label='Titel'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox checked={isChild} onChange={(e, v) => setIsChild(v)} />
          }
          label='Als untergeordneten Bereich erstellen?'
        />
        <Button variant='outlined' onClick={onSubmit}>
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
