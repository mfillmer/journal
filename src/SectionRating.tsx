import { Drawer, Typography } from '@mui/material'
import React, { FC } from 'react'
import { SectionItem } from './redux/sections'
import { useCurrentItem } from './Section.util'
import { SectionCommentInput } from './SectionCommentInput'
import { SectionRatingInput } from './SectionRatingInput'

export const SectionRating: FC = () => {
  const item = useCurrentItem()
  return (
    <Drawer anchor='bottom' open={!!item}>
      <Typography variant='h3'>{item?.name}</Typography>
      <SectionRatingInput uuid={item?.uuid || ''} />
      <SectionCommentInput uuid={item?.uuid || ''} />
    </Drawer>
  )
}
