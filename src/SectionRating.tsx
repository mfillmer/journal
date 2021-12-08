import { Close } from '@mui/icons-material'
import { Drawer, IconButton, Stack, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { useCurrentItem, useSetItem } from './Section.util'
import { SectionCommentInput } from './SectionCommentInput'
import { SectionRatingInput } from './SectionRatingInput'

export const SectionRating: FC = () => {
    const item = useCurrentItem()
    const setItem = useSetItem()
    const onClick = () => setItem(undefined)
    return (
        <Drawer
            variant='persistent'
            sx={{ borderTopLeftRadius: 3, borderTopRightRadius: 3 }}
            anchor='bottom' open={!!item} >
            <Box sx={{ padding: 2 }} >
                <Stack direction='row'>
                    <Typography variant='h3' title={item?.name} noWrap>{item?.name}</Typography>
                    <IconButton onClick={onClick}><Close /></IconButton>
                </Stack>
                <SectionRatingInput uuid={item?.uuid || ''} />
                <SectionCommentInput uuid={item?.uuid || ''} />
                <Button variant='outlined' fullWidth onClick={onClick}>Fertig</Button>
            </Box>
        </Drawer>
    )
}
