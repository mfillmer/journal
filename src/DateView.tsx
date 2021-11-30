import React from 'react'
import { useCurrentDate } from './DateView.utils'

export const DateView = () => {
  const { date, goBack, goForward } = useCurrentDate()
  return (
    <div>
      <button onClick={goBack}>&gt;</button>
      <div>{date}</div>
      <button>&lt;</button>
    </div>
  )
}
