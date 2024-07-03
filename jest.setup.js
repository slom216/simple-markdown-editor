import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

global.console = {
  ...console,
  error: jest.fn(),
}