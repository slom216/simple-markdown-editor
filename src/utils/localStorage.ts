export const loadMarkdownText = () => {
  return localStorage.getItem('markdownText') || ''
}

export const saveMarkdownText = (markdownText: string) => {
  localStorage.setItem('markdownText', markdownText)
}
