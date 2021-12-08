import { Edit } from '@mui/icons-material'
import { Fab, SxProps } from '@mui/material'
import React, { useState } from 'react'
import { SectionEditor } from './SectionEditor'

const fabStyle: SxProps = {
    position: 'fixed',
    bottom: 16,
    right: 16,
}
export const AddSection = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Fab sx={fabStyle} onClick={() => setOpen(!open)}>
                <Edit />
            </Fab>
            <SectionEditor open={open} setOpen={setOpen} />
        </div>
    )
}
