import { useChildrenRatings } from './useChildrenRatings'

export const useChildComments = (uuid: string) => {
  const childRatings = useChildrenRatings(uuid)
  return childRatings.map((c) => c?.comment)
}
