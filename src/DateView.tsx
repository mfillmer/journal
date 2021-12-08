import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { useDate } from './DateView.utils'

export const DateView = () => {
  const { dateString, goBack, goForward } = useDate()
  return (
    <ButtonGroup
      className='flex w-full'
      variant='outlined'
      aria-label='outlined primary button group'
    >
      <Button onClick={goBack}>&lt;</Button>
      <Button style={{ flex: 1 }}>{dateString}</Button>
      <Button onClick={goForward}>&gt;</Button>
    </ButtonGroup>
  )
}
