import { Stack } from '@mui/material'
import React from 'react'
import { useItems } from './Section.util'
import { SectionListItem } from './SectionListItem'

export const SectionList = () => {
  const items = useItems()

  return (
    <Stack>
      {items.map((item, index) => (
        <SectionListItem key={index} item={item} />
      ))}
    </Stack>
  )
}
