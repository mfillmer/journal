import userEvent from '@testing-library/user-event'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { ratingReducer } from './redux/ratings'
import { SectionItem } from './redux/sections'
import { SectionList } from './SectionList'
import { SectionListItem } from './SectionListItem'
import { render, screen } from './testUtils'

describe('today view', () => {
  const item = { name: 'test', path: '', uuid: '1' }
  const items: SectionItem[] = [
    { name: 'test', path: '', uuid: '1' },
    { name: 'test2', path: '', uuid: '2' },
    { name: 'testWithChildren', path: '', uuid: '3' },
    { name: 'test_child', path: '/testWithChildren', uuid: '4' },
  ]

  const preloadedState = {
    sections: { items, path: '' },
    ratings: {},
  }
  it('shows every top level section', () => {
    render(<SectionList />, {
      preloadedState,
    })
    expect(screen.queryAllByTestId('sectionListItem').length).toBe(3)
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
  it('lets the user tap into sections', async () => {
    render(<SectionList />, {
      preloadedState,
    })
    const element = screen.getByText(/testwithchildren/i)
    await act(async () => userEvent.click(element))
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
  it('lets the user tap out of sections', async () => {
    preloadedState.sections.path = '/testWithChildren'
    render(<SectionList />, {
      preloadedState,
    })
    const heading = screen.getByRole('heading')
    expect(heading.innerHTML).toMatch(/testWithChildren/i)
    expect(screen.queryByText(/test_child/i)).toBeInTheDocument()
    await act(async () => userEvent.click(heading))
    expect(screen.queryByText(/test_child/i)).not.toBeInTheDocument()
  })
  it('lets the user rate any section without children', async () => {
    render(<SectionListItem item={item} />)
    const buttons = screen.queryAllByRole('button')
    expect(buttons.length).toBe(4)
    expect(buttons[1]).not.toHaveClass('border-accent')
    await act(async () => {
      userEvent.click(buttons[1])
    })
    expect(buttons[1]).toHaveClass('border-accent')
  })
  it('lets the user take notes', () => {})
})
