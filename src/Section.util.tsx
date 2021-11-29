import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { addSection, setPath } from './redux/sections'
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

export const useItems = (path: string) => {
  const items = useAppSelector(
    (state) => state.sections.items?.filter((s) => s.path === path) || []
  )

  return items
}

export const useAdd = (value: string) => {
  const dispatch = useDispatch()
  const path = usePath()
  const add = () => dispatch(addSection({ name: value, path, uuid: v4() }))
  return add
}
