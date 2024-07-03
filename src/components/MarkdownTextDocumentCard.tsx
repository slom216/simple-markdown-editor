import React from 'react'
import ReactMarkdown from 'react-markdown'

import Card from './Card'
import style from './MarkdownTextDocumentCard.module.scss'

type MarkdownTextDocumentProps = {
  markdownText: string
}

const MarkdownTextDocumentCard: React.FC<MarkdownTextDocumentProps> = ({ markdownText }) => {
  return (
    <Card>
      <div className={style['preview-content']}>
        <div className={style.container}>
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </Card>
  )
}

export default MarkdownTextDocumentCard
