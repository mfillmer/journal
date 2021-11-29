import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { addSection } from './redux/sections'
import { useAppSelector } from './redux/store'
import { useSetPath } from './Section.util'


export const SectionList: FC = () => {
    const dispatch = useDispatch()
  const path = useAppSelector(state => state.sections.path)
  const setPath = useSetPath()
  const items = useAppSelector(
    (state) => state.sections.items?.filter((s) => s.path === path) || []
  )
  const heading = path.split('/').pop()
  const [value, setValue] = useState('')
  const add = () => dispatch(addSection({ name: value, path, uuid: v4() }))
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
