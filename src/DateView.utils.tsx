import { useDispatch } from 'react-redux'
import { goBack, goForward } from './redux/date'
import { useAppSelector } from './redux/store'

export const useDate = () => {
  const dispatch = useDispatch()
  const timestamp = useAppSelector((state) => state.date)

  return {
    dateString: new Date(timestamp).toLocaleDateString(),
    goBack: () => dispatch(goBack()),
    goForward: () => dispatch(goForward()),
  }
}
