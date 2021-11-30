import React, { FC } from 'react'
import { AddSectionInput } from './AddSectionInput'
import { SectionHeader } from './SectionHeader'
import { SubSectionList } from './SubSectionList'

export const SectionView: FC = () => {
  return (
    <>
      <SectionHeader />
      <SubSectionList />
      <AddSectionInput />
    </>
  )
}
