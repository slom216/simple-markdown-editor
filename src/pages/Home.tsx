import React from 'react'

import { loadMarkdownText, saveMarkdownText } from '../utils/localStorage'
import MarkdownTextDocumentCard from '../components/MarkdownTextDocumentCard'
import MarkdownTestEditorCard from 'components/MarkdownTextEditorCard'
import style from './Home.module.scss'

const HomePage: React.FC = () => {
  const [markdownText, setMarkdownText] = React.useState(loadMarkdownText())

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.target.value)
    saveMarkdownText(e.target.value)
  }

  return (
    <div className={style.main} data-testid='home-page'>
      <h1>SIMPLE REACT MARKDOWN TEXT DEMO</h1>
      <div className={style.container}>
        <MarkdownTestEditorCard markdownText={markdownText} onMarkdownTextChange={handleTextChange} />
        <MarkdownTextDocumentCard markdownText={markdownText} />
      </div>
      <button
        className={style['render-btn']}
        onClick={() =>
          alert(
            'This button is here only because it was is design, but conversion of markdown text is done automatically as you change it.'
          )
        }
      >
        RENDER
      </button>
    </div>
  )
}

export default HomePage
