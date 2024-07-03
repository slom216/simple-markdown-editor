import React from 'react'

import Card from '../components/Card'
import style from './MarkdownTextEditorCard.module.scss'

type MarkdownTestEditorCardProps = {
  markdownText: string
  onMarkdownTextChange(ChangeEvent: any): void
}

const MarkdownTestEditorCard: React.FC<MarkdownTestEditorCardProps> = ({ markdownText, onMarkdownTextChange }) => {
  return (
    <Card>
      <textarea
        id='markdown'
        placeholder="# Test document&#10;&#10;Let's create a variable `x`, equal to 5.&#10;```&#10;x = 5&#10;```"
        onChange={onMarkdownTextChange}
        value={markdownText}
        className={style['markdown-textarea']}
      />
    </Card>
  )
}

export default MarkdownTestEditorCard
