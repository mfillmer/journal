import React, { FC } from 'react'
import { SectionRatingInput } from './SectionRatingInput'
import { SectionItem } from './redux/sections'
import { usePath, useSetPath } from './Section.util'
import { Stack, Typography } from '@mui/material'

export const SubSectionListItem: FC<{ item: SectionItem }> = ({ item }) => {
  const path = usePath()
  const setPath = useSetPath()
  const onClick = (name: string) => () => {
    setPath(`${path}/${name}`)
  }
  return (
    <Stack
      direction='row'
      spacing='2'
      data-testid='sectionListItem'
      onClick={onClick(item.name)}
    >
      <Typography variant='h2'>{item.name}</Typography>
      <SectionRatingInput uuid={item.uuid} />
    </Stack>
  )
}
