import { Typography } from '@mui/material'
import React, { FC } from 'react'
import { SectionItem } from './redux/sections'
import { useHasChildren, usePath, useSetItem, useSetPath } from './Section.util'

export const SubSectionListItem: FC<{ item: SectionItem }> = ({ item }) => {
  const path = usePath()
  const setPath = useSetPath()
  const setItem = useSetItem()
  const hasChildren = useHasChildren(item)
  const onClick = () => {
    hasChildren ? setItem(item) : setPath(`${path}/${item.name}`)
  }
  return (
    <Typography noWrap onClick={onClick} variant='subtitle1'>
      {item.name} {hasChildren.toString()}
    </Typography>
  )
}
