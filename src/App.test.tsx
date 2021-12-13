import { render } from './testUtils'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { store } from './redux/store'

describe('app', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      {
        preloadedState: {
          sections: { test: { uuid: 'test', parent: '', label: 'test' } },
        },
      }
    )
  })
})
