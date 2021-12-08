import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { useDate } from './DateView.utils'

export const DateView = () => {
  const { dateString, goBack, goForward } = useDate()
  return (
    <ButtonGroup sx={{ marginY: 1, display: 'flex' }} variant='outlined'>
      <Button onClick={goBack}>
          <ArrowBackIosOutlined />
      </Button>
      <Button style={{ flex: 1 }}>{dateString}</Button>
      <Button onClick={goForward}>
          <ArrowForwardIosOutlined />
      </Button>
    </ButtonGroup>
  )
}
