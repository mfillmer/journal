import { ArrowForwardIos } from '@mui/icons-material'
import { IconButton, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import { useSectionComment } from './Rating.utils'
import { SectionItem } from './redux/sections'
import { useHasChildren, usePath, useSetItem, useSetPath } from './Section.util'
import { useRatingColor } from './useRatingColor'

export const SectionListItem: FC<{ item: SectionItem }> = ({ item }) => {
  const path = usePath()
  const setPath = useSetPath()
  const setItem = useSetItem()
  const { comment } = useSectionComment(item.uuid)
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
      <Typography
        variant='h2'
        noWrap={!comment}
        marginRight={1}
        sx={{
          flex: 1,
          wordBreak: 'break-all',
          transition: 'all',
          fontSize: !comment ? undefined : '1rem',
        }}>
        {item.label}
      </Typography>
      {comment && (
        <Typography variant='body1' flex='5' sx={{ wordBreak: 'break-all' }}>
          {comment}
        </Typography>
      )}
      <IconButton>
        <ArrowForwardIos />
      </IconButton>
    </Stack>
  )
}
