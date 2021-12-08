import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React, { FC } from 'react'
import { useSectionRating } from './Rating.utils'

interface props {
    uuid: string
}

export const SectionRatingInput: FC<props> = ({ uuid }) => {
    const items = Array(4).fill(0)
    const { rating, setRating } = useSectionRating(uuid)

    return (<div>
        <Typography variant='subtitle1'>Stresslevel</Typography>
        <ToggleButtonGroup fullWidth value={rating} size='large' >
            {items.map((_, index) => (
                <ToggleButton
                    fullWidth
                    value={index}
                    onClick={() => setRating(index)}
                    key={index}
                >{index}</ToggleButton>
            ))}
        </ToggleButtonGroup>
    </div>

    )
}
