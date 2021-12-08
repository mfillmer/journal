import { Stack } from '@mui/material'
import React from 'react'
import { useItems } from './Section.util'
import { SubSectionListItem } from './SubSectionListItem'

export const SubSectionList = () => {
  const items = useItems()

  return (
    <Stack>
      {items.map((item, index) => (
        <SubSectionListItem key={index} item={item} />
      ))}
    </Stack>
  )
}
