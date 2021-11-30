import React, { FC } from 'react'
import { useSectionRating } from './Rating.utils'

interface props {
  uuid: string
}

export const SectionRatingInput: FC<props> = ({ uuid }) => {
  const items = Array(4).fill(0)
  const { comment, rating, setRating, setComment } = useSectionRating(uuid)

  return (
    <div onClick={(e) => e.stopPropagation()}>
      {!!rating && <div>{rating}</div>}
      {items.map((_, index) => (
        <button onClick={() => setRating(index)} key={index}>
          {index}
        </button>
      ))}
      {rating >= 0 && (
        <input
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
        />
      )}
    </div>
  )
}
