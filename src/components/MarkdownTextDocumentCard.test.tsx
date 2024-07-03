import { render, screen } from '@testing-library/react'
import MarkdownTextDocumentCard from './MarkdownTextDocumentCard'

describe('MarkdownTextDocumentCard', () => {
  it('renders the markdown text as plain text', () => {
    const testMarkdownText = 'This is a test'
    render(<MarkdownTextDocumentCard markdownText={testMarkdownText} />)

    expect(screen.getByText(testMarkdownText)).toBeInTheDocument()
  })
})
