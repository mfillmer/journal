import React from 'react'
import { useDate } from './DateView.utils'

export const DateView = () => {
  const { date, goBack, goForward } = useDate()
  return (
    <div>
      <button onClick={goBack}>&lt;</button>
      <div>{date.toLocaleDateString()}</div>
      <button onClick={goForward}>&gt;</button>
    </div>
  )
}
