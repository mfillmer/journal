import React, { FC, useState } from 'react'
import { useAdd, useGoUp, useHeading } from './Section.util'
import { SectionListItems } from './SectionListItems'

export const SectionList: FC = () => {
  const heading = useHeading()
  const [value, setValue] = useState('')
  const add = useAdd(value)
  const goUp = useGoUp()
  return (
    <>
      {heading && <h1 onClick={goUp}>{heading}</h1>}
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
