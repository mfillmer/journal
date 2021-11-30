import React, { FC } from 'react'
import { SectionRatingInput } from './SectionRatingInput'
import { SectionItem } from './redux/sections'
import { usePath, useSetPath } from './Section.util'

export const SubSectionListItem: FC<{ item: SectionItem }> = ({ item }) => {
  const path = usePath()
  const setPath = useSetPath()
  const onClick = (name: string) => () => {
    setPath(`${path}/${name}`)
  }
  return (
    <div data-testid='sectionListItem' onClick={onClick(item.name)}>
      <div>{item.name}</div>
      <SectionRatingInput uuid={item.uuid} />
    </div>
  )
}
