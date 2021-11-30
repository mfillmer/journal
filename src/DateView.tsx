import React from 'react'
import { useDate } from './DateView.utils'

export const DateView = () => {
  const { dateString, goBack, goForward } = useDate()
  return (
    <div>
      <button onClick={goBack}>&lt;</button>
      <div>{dateString}</div>
      <button onClick={goForward}>&gt;</button>
    </div>
  )
}
