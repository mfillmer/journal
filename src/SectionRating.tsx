import { Drawer, Typography } from '@mui/material'
import React, { FC } from 'react'
import { useCurrentItem, useSetItem } from './Section.util'
import { SectionCommentInput } from './SectionCommentInput'
import { SectionRatingInput } from './SectionRatingInput'

export const SectionRating: FC = () => {
  const item = useCurrentItem()
  const setItem = useSetItem()
  const onClick = () => setItem(undefined)
  return (
    <Drawer anchor='bottom' open={!!item} onClick={onClick}>
      <Typography variant='h3'>{item?.name}</Typography>
      <SectionRatingInput uuid={item?.uuid || ''} />
      <SectionCommentInput uuid={item?.uuid || ''} />
    </Drawer>
  )
}
