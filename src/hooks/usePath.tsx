import { useAppSelector } from '../redux/store'

export const usePath = () => {
  const path = useAppSelector((state) => state.sections.path)
  return path
}
