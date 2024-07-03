import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('App Component', () => {
  test('renders HomePage component', () => {
    render(<App />)
    expect(screen.getByTestId('home-page')).toBeInTheDocument()
  })
})
