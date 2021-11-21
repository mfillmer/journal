import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { SectionList } from './SectionList'

describe('today view', () => {
  const sections = { test: {}, test2: {}, testWithChildren: { test: {} } }
  it('shows every top level section', () => {
    render(<SectionList sections={sections} />)
    expect(screen.queryAllByTestId('sectionListItem').length).toBe(3)
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
  it('lets the user tap into sections', () => {
    render(<SectionList sections={sections} />)
    const element = screen.getByText(/testwithchildren/i)
    act(() => userEvent.click(element))
    const child = screen.getByTestId('sectionListItem')
    const heading = screen.getByRole('heading')
    expect(child).toHaveTextContent('test')
    expect(heading.innerHTML).toMatch(/testWithChildren/)
  })
  it('lets the user add sections', () => {})
  it('lets the user rate any section without children', () => {})
  it('lets the user take notes', () => {})
})
