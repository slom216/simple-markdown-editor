/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import MarkdownTextEditorCard from './MarkdownTextEditorCard'
import '@testing-library/jest-dom/extend-expect'

describe('MarkdownTextEditorCard', () => {
  afterEach(cleanup)

  it('renders without crashing', () => {
    const { getByPlaceholderText } = render(<MarkdownTextEditorCard markdownText='' onMarkdownTextChange={() => {}} />)
    expect(getByPlaceholderText(/Test document/)).toBeInTheDocument()
  })

  it('has the correct placeholder', () => {
    const { getByPlaceholderText } = render(<MarkdownTextEditorCard markdownText='' onMarkdownTextChange={() => {}} />)
    expect(getByPlaceholderText(/Test document/)).toBeInTheDocument()
  })

  it('displays the initial markdown text', () => {
    const initialText = 'Initial markdown text'
    const { getByDisplayValue } = render(
      <MarkdownTextEditorCard markdownText={initialText} onMarkdownTextChange={() => {}} />
    )
    expect(getByDisplayValue(initialText)).toBeInTheDocument()
  })

  it('calls onMarkdownTextChange on textarea change', () => {
    const handleChange = jest.fn()
    const { getByPlaceholderText } = render(
      <MarkdownTextEditorCard markdownText='' onMarkdownTextChange={handleChange} />
    )
    const textarea = getByPlaceholderText(/Test document/)
    fireEvent.change(textarea, { target: { value: 'New text' } })
    expect(handleChange).toHaveBeenCalled()
  })
})
