import { usePath } from './usePath'
import { useSetPath } from './useSetPath'

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
