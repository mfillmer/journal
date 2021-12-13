import { useNavigate } from 'react-router-dom'
import { useCurrentSection } from './useCurrentSection'

export const useGoUp = () => {
  const parent = useCurrentSection()?.parent || ''
  const navigate = useNavigate()
  return () => navigate(`/${parent}`)
}
