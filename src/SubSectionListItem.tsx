import { Typography } from '@mui/material'
import React, { FC } from 'react'
import { SectionItem } from './redux/sections'
import { usePath, useSetPath } from './Section.util'

export const SubSectionListItem: FC<{ item: SectionItem }> = ({ item }) => {
  const path = usePath()
  const setPath = useSetPath()
  const onClick = () => {
    setPath(`${path}/${item.name}`)
  }
  return (
    <>
      <Typography noWrap onClick={onClick} variant='subtitle1'>
        {item.name}
      </Typography>
    </>
  )
}
