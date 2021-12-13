import { useDispatch } from 'react-redux'
import { useDate } from './useDate'
import { getRatingId } from '../redux/getRatingId'
import { setRating } from '../redux/ratings'
import { useAppSelector } from '../redux/store'
import { useChildComments } from './useChildComments'

export const useSectionComment = (uuid: string) => {
  const dispatch = useDispatch()
  const { dateString: date } = useDate()
  const id = getRatingId(date, uuid)
  const rating = useAppSelector(
    (state) => state.ratings[id] || { section: uuid, date }
  )

  const childComments = useChildComments(uuid)

  return {
    comments: rating.comment ? [rating.comment] : childComments,
    setComment: (comment: string) => {
      dispatch(setRating({ ...rating, comment }))
    },
  }
}
