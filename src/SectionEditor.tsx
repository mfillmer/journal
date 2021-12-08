import { Button, Drawer, TextField } from '@mui/material'
import React, { FC, useState } from 'react'
import { useAdd } from './Section.util'

interface props {
    open?: boolean
    setOpen?: (v: boolean) => void
}

export const SectionEditor: FC<props> = ({ open = false, setOpen = () => { } }) => {
    const [value, setValue] = useState('')
    const add = useAdd(value)
    const reset = () => setValue('')
    const onSubmit = () => {
        add()
        reset()
        setOpen(false)
    }
    return (
        <Drawer
            variant='persistent'
            anchor='bottom'
            open={open} >
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
        </Drawer>
    )
}
