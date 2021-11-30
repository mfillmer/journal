import React, { useState } from 'react'
import { useAdd } from './Section.util'

export const AddSectionInput = () => {
  const [value, setValue] = useState('')
  const add = useAdd(value)
  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <div onClick={add}>Bereich hinzufügen</div>
    </div>
  )
}
