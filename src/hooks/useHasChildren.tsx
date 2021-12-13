import { SectionItem } from '../redux/sections'
import { useAppSelector } from '../redux/store'

export const useHasChildren = (section: SectionItem): boolean => {
  const child = useAppSelector((state) =>
    Object.values(state.sections).find((s) => s.parent === section.uuid)
  )

  return !!child
}
