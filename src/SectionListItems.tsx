import React from 'react'
import { useItems, usePath, useSetPath } from './Section.util'

export const SectionListItems = () => {
  const path = usePath()
  const items = useItems()
  const setPath = useSetPath()
  const onClick = (name: string) => () => {
    setPath(`${path}/${name}`)
  }
  return (
    <>
      {items.map((item, index) => (
        <div
          data-testid='sectionListItem'
          onClick={onClick(item.name)}
          key={index}
        >
          {item.name}
        </div>
      ))}
    </>
  )
}
