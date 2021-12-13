import { useDispatch } from 'react-redux'
import { useDate } from './useDate'
import { getRatingId } from '../redux/getRatingId'
import { setRating } from '../redux/ratings'
import { useAppSelector } from '../redux/store'

export const useSectionComment = (section: string) => {
  const dispatch = useDispatch()
  const { dateString: date } = useDate()
  const id = getRatingId(date, section)
  const rating = useAppSelector(
    (state) => state.ratings[id] || { section, date }
  )

  return {
    comment: rating.comment,
    setComment: (comment: string) => {
      dispatch(setRating({ ...rating, comment }))
    },
  }
}
