import { useChildrenRatings } from './useChildrenRatings'
import { useSectionRating } from './useSectionRating'

export const ratingColors = ['#BAF3B4', '#97C8DB', '#DFB0FF', '#FCBBB1']
export const useRatingColor = (sectionUuid: string) => {
  const childRatings = useChildrenRatings(sectionUuid).map((r) => r?.value)
  const avgRating = Math.ceil(
    childRatings.reduce((a, b) => a + b, 0) / childRatings.length
  )
  const { rating } = useSectionRating(sectionUuid)

  return ratingColors[rating] || ratingColors[avgRating] || ''
}
