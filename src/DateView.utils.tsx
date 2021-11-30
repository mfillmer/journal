import { useDispatch } from 'react-redux'
import { goBack, goForward } from './redux/date'
import { useAppSelector } from './redux/store'

export const useDate = () => {
  const dispatch = useDispatch()
  const timestamp = useAppSelector((state) => state.date)

  return {
    date: new Date(timestamp),
    goBack: () => dispatch(goBack()),
    goForward: () => dispatch(goForward()),
  }
}
