import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { addSection } from './redux/sections'
import { useAppSelector } from './redux/store'
import {
  useAdd,
  useHeading,
  useItems,
  usePath,
  useSetPath,
} from './Section.util'

export const SectionList: FC = () => {
  const path = usePath()
  const setPath = useSetPath()
  const items = useItems(path)
  const heading = useHeading()
  const [value, setValue] = useState('')
  const add = useAdd(value)
  return (
    <>
      {heading && <h1>{heading}</h1>}
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <div onClick={add}>Bereich hinzufügen</div>
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
