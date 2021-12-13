import { SectionItem } from '../redux/sections'
import { useAppSelector } from '../redux/store'
import { useCurrentSection } from './useCurrentSection'

export const useSections = (): SectionItem[] => {
  const currentUuid = useCurrentSection()?.uuid || ''
  const items = useAppSelector((state) => Object.values(state.sections))
  return items.filter((s) => s.parent === currentUuid)
}
