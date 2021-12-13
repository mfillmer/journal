import { styled } from '@mui/system'

export const StyledInputElement = styled('input')`
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
