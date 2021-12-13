import { useSectionRating } from './useSectionRating'

export const ratingColors = ['#BAF3B4', '#97C8DB', '#DFB0FF', '#FCBBB1']
export const useRatingColor = (sectionUuid: string) => {
  const { rating } = useSectionRating(sectionUuid)

  return ratingColors[rating] || ''
}
