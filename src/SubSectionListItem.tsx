import { Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import { SectionItem } from './redux/sections'
import { usePath, useSetPath } from './Section.util'
import { SectionRatingInput } from './SectionRatingInput'

export const SubSectionListItem: FC<{ item: SectionItem }> = ({ item }) => {
  const path = usePath()
  const setPath = useSetPath()
  const onClick = (name: string) => () => {
    setPath(`${path}/${name}`)
  }
  return (
    <Stack>
      <Typography noWrap onClick={onClick(item.name)} variant='subtitle1'>
        {item.name}
      </Typography>
      <SectionRatingInput uuid={item.uuid} />
    </Stack>
  )
}
