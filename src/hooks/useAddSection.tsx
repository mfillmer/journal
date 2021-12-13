import { useDispatch } from 'react-redux'
import { addSection } from '../redux/sections'
import { useCurrentSection } from './useCurrentSection'

export const useAddSection = () => {
  const dispatch = useDispatch()
  const current = useCurrentSection()
  return (label: string) => {
    dispatch(addSection({ label, parent: current?.uuid }))
  }
}
