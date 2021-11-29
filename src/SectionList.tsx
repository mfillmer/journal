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
import { SectionListItems } from './SectionListItems'

export const SectionList: FC = () => {
  const path = usePath()
  const setPath = useSetPath()
  const items = useItems()
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
      <SectionListItems />
    </>
  )
}
