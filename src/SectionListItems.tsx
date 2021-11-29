import React from 'react'
import { useItems, usePath, useSetPath } from './Section.util'
import { SectionListItem } from './SectionListItem'

export const SectionListItems = () => {
  const items = useItems()

  return (
    <>
      {items.map((item, index) => (
        <SectionListItem key={index} item={item} />
      ))}
    </>
  )
}
