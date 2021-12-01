import { useDispatch } from 'react-redux'
import { useDate } from './DateView.utils'
import { getRatingId } from './redux/getRatingId'
import { setRating } from './redux/ratings'
import { useAppSelector } from './redux/store'

export const useSectionRating = (section: string) => {
  const dispatch = useDispatch()
  const { dateString: date } = useDate()
  const id = getRatingId(date, section)

  const rating = useAppSelector(
    (state) => state.ratings[id] || { section, date }
  )
  const { comment = '', value } = rating
  const setField = (field: string) => (value: string | number | undefined) => {
    dispatch(setRating({ ...rating, [field]: value }))
  }

  return {
    comment,
    setComment: setField('comment'),
    rating: value,
    setRating: setField('value'),
  }
}
