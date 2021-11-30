import { Typography } from '@mui/material'
import { Box } from '@mui/system'
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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginY: 1,
        width: '100%',
      }}
    >
      <Typography
        sx={{ marginRight: 2 }}
        onClick={onClick(item.name)}
        variant='h4'
      >
        {item.name}
      </Typography>
      <SectionRatingInput uuid={item.uuid} />
    </Box>
  )
}
