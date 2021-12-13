import { useDispatch } from 'react-redux'
import { SectionItem } from '../redux/sections'
import { setItem } from '../redux/ui'

export const useSetItem = () => {
  const dispatch = useDispatch()
  return (item: SectionItem | undefined) => dispatch(setItem(item))
}
