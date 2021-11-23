import React, { FC } from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { sectionReducer } from './redux/sections'

const render = (
  //@ts-ignore
  ui,
  {
    //@ts-ignore
    preloadedState = {},
    route = '/',
    store = configureStore({
      reducer: { sections: sectionReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) => {
  window.history.pushState({}, 'Test page', route)
  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
