import { usePath } from './usePath'

export const useHeading = () => {
  const path = usePath()
  const heading = path?.split('/').pop()
  return heading
}
