import { render } from '@testing-library/react'
import App from './App'

jest.mock('react-dom/client', () => {
  const originalModule = jest.requireActual('react-dom/client')
  return {
    __esModule: true,
    ...originalModule,
    createRoot: jest.fn().mockReturnValue({
      render: jest.fn(),
      unmount: jest.fn(),
    }),
  }
})

describe('App Entry Point', () => {
  it('renders App component without crashing', () => {
    render(<App />)

    expect(require('react-dom/client').createRoot).toHaveBeenCalled()
    expect(require('react-dom/client').createRoot().render).toHaveBeenCalled()
  })
})
