import { Close, Settings } from '@mui/icons-material'
import { Button, Drawer, IconButton, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCurrentItem } from './hooks/useCurrentItem'
import { useSetItem } from './hooks/useSetItem'

import { SectionCommentInput } from './SectionCommentInput'
import { SectionRatingInput } from './SectionRatingInput'

export const SectionRating: FC = () => {
  const navigate = useNavigate()
  const setItem = useSetItem()
  const item = useCurrentItem()
  const close = () => setItem(undefined)
  const stepInto = () => {
    if (item) {
      navigate(`/${item.uuid}`)
      close()
    }
  }
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
          <IconButton onClick={stepInto}>
            <Settings />
          </IconButton>
          <Typography variant='h3' title={item?.label} noWrap>
            {item?.label}
          </Typography>
          <IconButton onClick={close}>
            <Close />
          </IconButton>
        </Stack>
        <SectionRatingInput uuid={item?.uuid || ''} />
        <SectionCommentInput uuid={item?.uuid || ''} />
        <Button variant='outlined' fullWidth onClick={close}>
          Fertig
        </Button>
      </Box>
    </Drawer>
  )
}
