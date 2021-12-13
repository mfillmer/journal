import { useCurrentSection } from './useCurrentSection'

export const useHeading = () => {
  const label = useCurrentSection()?.label
  return label || ''
}
