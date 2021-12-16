import { InputUnstyled, InputUnstyledProps } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const StyledInputElement = styled('input')`
  min-width: 200px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  flex: 1;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border-radius: 1rem;
  padding: 6px 10px;
  border: none;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    background: #eaeef3;
  }

  &:focus {
    background: white;
    outline: none;
  }
`

export const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
    />
  )
})
