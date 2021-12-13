import { useDispatch } from 'react-redux'
import { upsertSection, SectionItem, setPath } from './redux/sections'
import { useAppSelector } from './redux/store'
import { setItem } from './redux/ui'

export const useSetPath = () => {
  const dispatch = useDispatch()
  const fn = (val: string) => {
    dispatch(setPath(val))
  }
  return fn
}

export const useSetItem = () => {
  const dispatch = useDispatch()
  return (item: SectionItem | undefined) => dispatch(setItem(item))
}

export const usePath = () => {
  const path = useAppSelector((state) => state.sections.path)
  return path
}

export const useHeading = () => {
  const path = usePath()
  const heading = path?.split('/').pop()
  return heading
}

export const useSections = (): SectionItem[] => {
  const path = usePath()
  const items = useAppSelector((state) =>
    Object.values(state.sections.items)?.filter((s) => s.path === path)
  )
  return items
}

export const useHasChildren = (section: SectionItem): boolean => {
  const path = `${section.path}/${section.label}`
  const items = useAppSelector((state) =>
    Object.values(state.sections.items).filter((s) => s.path === path)
  )
  return !!items.length
}

export const useCurrentItem = (): SectionItem | undefined => {
  const item = useAppSelector((state) => state.ui.currentItem)
  return item
}

export const useGoUp = () => {
  const path = usePath()
  const setPath = useSetPath()
  const goUp = () => {
    const newPath = path.split('/')
    newPath.pop()
    setPath(newPath.reverse().join('/'))
  }
  return goUp
}

export const useSubmitSection = (
  label?: string,
  uuid?: string,
  isChild: boolean = false
) => {
  const dispatch = useDispatch()

  const submit = () => {
    if (!!label) dispatch(upsertSection({ label, uuid, isChild }))
  }
  return submit
}
