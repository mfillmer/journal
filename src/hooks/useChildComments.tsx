import { useAppSelector } from '../redux/store'
import { useChildrenRatings } from './useChildrenRatings'

export const useChildComments = (uuid: string) => {
  const sections = useAppSelector((state) => state.sections)

  const childRatings = useChildrenRatings(uuid)
  return childRatings
    .map((c) => ({ ...c, label: sections[c.section]?.label || '' }))
    .map((c) => `${c.label && c.label + ':'} ${c?.comment}`.trim())
}
