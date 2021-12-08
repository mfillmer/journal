import { useDispatch } from 'react-redux'
import { addSection, SectionItem, setPath } from './redux/sections'
import { useAppSelector } from './redux/store'

export const useSetPath = () => {
  const dispatch = useDispatch()
  const fn = (val: string) => {
    dispatch(setPath(val))
  }
  return fn
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

export const useItems = (): SectionItem[] => {
  const path = usePath()
  const items = useAppSelector((state) =>
    Object.values(state.sections.items)?.filter((s) => s.path === path)
  )

  return items
}

export const useCurrentItem = (): SectionItem | undefined => {
  const path = usePath().split('/')
  const heading = path.pop()
  const item = useAppSelector((state) => Object.values(state.sections.items))
    .filter((s) => s.path === path.join('/'))
    .find((s) => s.name === heading)

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

export const useAdd = (value: string) => {
  const dispatch = useDispatch()

  const add = () => value && dispatch(addSection(value))
  return add
}
