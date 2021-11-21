import React, { FC, useState } from 'react'

interface Section {
  [key: string]: Section
}

interface props {
  sections: Section
}

const traverse = (path: string, object: Section, pathSeparator = '/') => {
  const items = path.split(pathSeparator)
  let result = object
  items.forEach((item) => {
    result = result[item] ?? result
  })
  return result
}

export const SectionList: FC<props> = ({ sections = {} }) => {
  const [path, setPath] = useState('')
  const items = traverse(path, sections)
  const heading = path.split('/').pop()
  return (
    <>
      {heading && <h1>{heading}</h1>}
      {Object.keys(items).map((key, index) => (
        <div
          onClick={() => {
            setPath(`/${key}`)
          }}
          data-testid='sectionListItem'
          key={index}
        >
          {key}
        </div>
      ))}
    </>
  )
}
