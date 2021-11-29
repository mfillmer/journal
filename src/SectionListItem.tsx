import React, { FC } from 'react'
import { RatingButtonList } from './RatingButtonList'
import { SectionItem } from './redux/sections'
import { usePath, useSetPath } from './Section.util'

export const SectionListItem: FC<{ item: SectionItem }> = ({ item }) => {
  const path = usePath()
  const setPath = useSetPath()
  const onClick = (name: string) => () => {
    setPath(`${path}/${name}`)
  }
  return (
    <div data-testid='sectionListItem' onClick={onClick(item.name)}>
      <div>{item.name}</div>
      <RatingButtonList uuid={item.uuid} />
    </div>
  )
}
