import React from 'react'
import { useItems, usePath, useSetPath } from './Section.util'

export const SectionListItems = () => {
  const path = usePath()
  const items = useItems()
  const setPath = useSetPath()

  return (
    <>
      {items.map((item, index) => (
        <div
          onClick={() => {
            setPath(`${path}/${item.name}`)
          }}
          data-testid='sectionListItem'
          key={index}
        >
          {item.name}
        </div>
      ))}
    </>
  )
}
