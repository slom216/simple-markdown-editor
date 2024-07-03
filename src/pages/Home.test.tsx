/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent, cleanup } from '@testing-library/react'
import HomePage from './Home'
import * as localStorageUtils from '../utils/localStorage'
import '@testing-library/jest-dom'

jest.mock('components/MarkdownTextEditorCard', () => () => <textarea data-testid='markdown-editor'></textarea>)

jest.spyOn(localStorageUtils, 'loadMarkdownText').mockReturnValue('Loaded markdown text')
jest.spyOn(localStorageUtils, 'saveMarkdownText').mockImplementation(() => {})

describe('HomePage', () => {
  afterEach(cleanup)

  it('renders without crashing', () => {
    const { getByTestId } = render(<HomePage />)
    expect(getByTestId('home-page')).toBeInTheDocument()
  })

  it('loads initial markdown text', () => {
    const view = render(<HomePage />)
    const { getByText } = view
    expect(getByText('Loaded markdown text')).toBeInTheDocument()
  })

  it('shows alert on button click', () => {
    const alert = jest.spyOn(window, 'alert').mockImplementation(() => {})
    const { getByText } = render(<HomePage />)
    fireEvent.click(getByText('RENDER'))
    expect(alert).toHaveBeenCalled()
  })
})
