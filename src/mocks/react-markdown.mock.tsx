import React from 'react'

interface ReactMarkdownMockProps {
  children: React.ReactNode
}

const ReactMarkdownMock: React.FC<ReactMarkdownMockProps> = ({ children }) => {
  return <div>{children}</div>
}

export default ReactMarkdownMock
