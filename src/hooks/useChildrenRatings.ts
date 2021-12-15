import { getRatingId } from '../redux/getRatingId'
import {} from '../'
import { useAppSelector } from '../redux/store'
import { useDate } from './useDate'

export const useChildrenRatings = (uuid: string) => {
  const { dateString: date } = useDate()
  const ratings = useAppSelector((state) => state.ratings)

  const children = useAppSelector((state) =>
    Object.values(state.sections)
  ).filter((s) => s.parent === uuid)

  const items = children
    .map((c) => getRatingId(date, c.uuid))
    .map((id) => ratings[id])
    .filter((r) => !!r)

  return items
}
