import { useDispatch } from 'react-redux'
import { addSection } from '../redux/sections'

export const useAddSection = () => {
  const dispatch = useDispatch()
  return (label: string) => {
    dispatch(addSection(label))
  }
}
