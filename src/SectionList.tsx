import { Stack } from '@mui/material'
import React from 'react'
import { useSections } from './hooks/useSections'
import { SectionListItem } from './SectionListItem'

export const SectionList = () => {
  const sections = useSections()

  return (
    <Stack>
      {sections.map((item, index) => (
        <SectionListItem key={index} item={item} />
      ))}
    </Stack>
  )
}
