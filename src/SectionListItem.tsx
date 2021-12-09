import { ArrowForwardIos, Edit } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { SectionItem } from './redux/sections'
import { useHasChildren, usePath, useSetItem, useSetPath } from './Section.util'

export const SectionListItem: FC<{ item: SectionItem }> = ({ item }) => {
  const path = usePath()
  const setPath = useSetPath()
  const setItem = useSetItem()
  const hasChildren = useHasChildren(item)
  const onClick = () => {
    hasChildren ? setPath(`${path}/${item.label}`) : setItem(item)
  }
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', marginY: 1 }}
      onClick={onClick}>
      <Typography noWrap variant='h2' sx={{ flex: 1 }}>
        {item.label}
      </Typography>
      <IconButton>{hasChildren ? <ArrowForwardIos /> : <Edit />}</IconButton>
    </Box>
  )
}
