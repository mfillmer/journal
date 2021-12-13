import { SectionItem } from '../redux/sections'
import { useAppSelector } from '../redux/store'

export const useCurrentItem = (): SectionItem | undefined => {
  const item = useAppSelector((state) => state.ui.currentItem)
  return item
}
