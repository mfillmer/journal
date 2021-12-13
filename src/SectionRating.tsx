import { Close } from '@mui/icons-material'
import { Button, Drawer, IconButton, Stack, Typography } from '@mui/material'
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
      variant='temporary'
      sx={{ borderTopLeftRadius: 3, borderTopRightRadius: 3 }}
      anchor='bottom'
      open={!!item}>
      <Box
        padding={2}
        width='600px'
        maxWidth='100%'
        marginX='auto'
        boxSizing='border-box'
        minHeight='66vh'
        display='flex'
        flexDirection='column'
        justifyContent='space-evenly'>
        <Stack
          direction='row'
          marginY={4}
          width='full'
          alignItems='center'
          justifyContent='space-between'>
          <Typography variant='h3' title={item?.label} noWrap>
            {item?.label}
          </Typography>
          <IconButton onClick={onClick}>
            <Close />
          </IconButton>
        </Stack>
        <SectionRatingInput uuid={item?.uuid || ''} />
        <SectionCommentInput uuid={item?.uuid || ''} />
        <Button variant='outlined' fullWidth onClick={onClick}>
          Fertig
        </Button>
      </Box>
    </Drawer>
  )
}
