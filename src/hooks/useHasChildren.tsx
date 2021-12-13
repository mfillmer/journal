import { SectionItem } from '../redux/sections'
import { useAppSelector } from '../redux/store'

export const useHasChildren = (section: SectionItem): boolean => {
  const path = `${section.path}/${section.label}`
  const items = useAppSelector((state) =>
    Object.values(state.sections.items).filter((s) => s.path === path)
  )
  return !!items.length
}
