import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setRating } from './redux/ratings'
import { useAppSelector } from './redux/store'

interface props {
  uuid: string
}

export const RatingButtonList: FC<props> = ({ uuid }) => {
  const items = Array(4).fill(0)
  const dispatch = useDispatch()
  const onClick = (value: number) => () =>
    dispatch(setRating({ date: '', sectionUuid: uuid, value }))
  const rating = useAppSelector(
    (state) =>
      Object.values(state.ratings).find((f) => f.sectionUuid === uuid)?.value
  )
  return (
    <>
      {items.map((_, index) => (
        <button
          className={`${rating === index && 'border-accent'}`}
          onClick={onClick(index)}
          key={index}
        >
          {index}
        </button>
      ))}
    </>
  )
}
