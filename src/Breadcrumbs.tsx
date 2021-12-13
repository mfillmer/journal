import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { useBreadcrumbs } from './useBreadcrumbs'

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs({ includeCurrent: false })

  return (
    <MuiBreadcrumbs>
      {breadcrumbs.map((b, i) => (
        <Link key={i} to={`/${b.uuid}`}>
          {b?.label}
        </Link>
      ))}
    </MuiBreadcrumbs>
  )
}
