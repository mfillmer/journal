import { useMatch } from 'react-router-dom'
import { SectionItem } from '../redux/sections'
import { useAppSelector } from '../redux/store'

export const useCurrentSection = (): SectionItem | undefined => {
  const match = useMatch('/:uuid')
  const uuid = match?.params.uuid || ''
  const item = useAppSelector((state) => state.sections[uuid])
  return item
}
