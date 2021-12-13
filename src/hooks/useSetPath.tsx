import { useDispatch } from 'react-redux'
import { setPath } from '../redux/sections'

export const useSetPath = () => {
  const dispatch = useDispatch()
  const fn = (val: string) => {
    dispatch(setPath(val))
  }
  return fn
}
