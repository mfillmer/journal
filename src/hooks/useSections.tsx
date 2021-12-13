import { SectionItem } from '../redux/sections'
import { useAppSelector } from '../redux/store'
import { usePath } from './usePath'

export const useSections = (): SectionItem[] => {
  const path = usePath()
  const items = useAppSelector((state) =>
    Object.values(state.sections.items)?.filter((s) => s.path === path)
  )
  return items
}
