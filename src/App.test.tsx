import React from 'react'
import { render, screen } from './testUtils'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import { SectionList } from './SectionList'
import { SectionItem } from './redux/sections'

describe('today view', () => {
  const items: SectionItem[] = [
    { name: 'test', path: '', uuid: '1' },
    { name: 'test2', path: '', uuid: '2' },
    { name: 'testWithChildren', path: '', uuid: '3' },
    { name: 'test', path: '/testWithChildren', uuid: '4' },
  ]

  it('shows every top level section', () => {
    render(<SectionList />, {
      preloadedState: { sections: { items } },
    })
    expect(screen.queryAllByTestId('sectionListItem').length).toBe(3)
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
  it('lets the user tap into sections', () => {
    render(<SectionList />, {
      preloadedState: { sections: { items } },
    })
    const element = screen.getByText(/testwithchildren/i)
    act(() => userEvent.click(element))
    const child = screen.getByTestId('sectionListItem')
    const heading = screen.getByRole('heading')
    expect(child).toHaveTextContent('test')
    expect(heading.innerHTML).toMatch(/testWithChildren/)
  })
  it('lets the user add sections', async () => {
    render(<SectionList />)
    const addButton = screen.getByText(/bereich hinzufügen/i)
    const newSectionText = screen.getByRole('textbox')
    expect(addButton).toBeVisible()
    expect(newSectionText).toBeVisible()
    expect(screen.queryAllByTestId('sectionListItem').length).toBe(0)
    await act(async () => {
      userEvent.paste(newSectionText, 'new item')
    })
    await act(async () => {
      userEvent.click(addButton)
    })
    expect(screen.queryAllByTestId('sectionListItem').length).toBe(1)
    expect(screen.getByTestId('sectionListItem')).toHaveTextContent('new item')
  })
  it('lets the user rate any section without children', () => {})
  it('lets the user take notes', () => {})
})
