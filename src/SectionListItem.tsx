import { ArrowForwardIos } from '@mui/icons-material'
import { IconButton, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import { SectionItem } from './redux/sections'
import { useHasChildren, usePath, useSetItem, useSetPath } from './Section.util'
import { useRatingColor } from './useRatingColor'

export const SectionListItem: FC<{ item: SectionItem }> = ({ item }) => {
  const path = usePath()
  const setPath = useSetPath()
  const setItem = useSetItem()
  const bgColor = useRatingColor(item.uuid)
  const hasChildren = useHasChildren(item)
  const onClick = () => {
    hasChildren ? setPath(`${path}/${item.label}`) : setItem(item)
  }
  return (
    <Stack
      bgcolor={bgColor}
      direction='row'
      padding={1}
      borderRadius={4}
      alignItems='center'
      marginY={1}
      onClick={onClick}>
      <Typography noWrap variant='h2' sx={{ flex: 1 }}>
        {item.label}
      </Typography>
      <IconButton>
        <ArrowForwardIos />
      </IconButton>
    </Stack>
  )
}
