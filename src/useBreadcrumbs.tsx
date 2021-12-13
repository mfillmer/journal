import { useCurrentSection } from './hooks/useCurrentSection'
import { SectionItem } from './redux/sections'
import { useAppSelector } from './redux/store'

export const useBreadcrumbs = ({
  depth = 3,
  includeCurrent = false,
}: {
  depth?: number
  includeCurrent?: boolean
} = {}) => {
  const current = useCurrentSection()
  const sections = useAppSelector((state) => Object.values(state.sections))

  if (!current) return [] as SectionItem[]

  let parts: SectionItem[] = [current]

  while (parts.length <= depth) {
    const parentUuid = parts[0]?.parent
    const parent = sections.find((s) => s.uuid === parentUuid)
    if (!parent) {
      const root = { label: 'journal', uuid: '', parent: '' }
      parts = [root, ...parts]
      break
    } else {
      parts = [parent, ...parts]
    }
  }

  return parts.filter((p) => includeCurrent || p.uuid !== current.uuid)
}
