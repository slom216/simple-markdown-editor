import { loadMarkdownText, saveMarkdownText } from './localStorage'

describe('localStorage operations for markdown text', () => {
  const key = 'markdownText'
  const sampleText = '# Sample Markdown'

  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(jest.fn())
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => sampleText)
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('saveMarkdownText', () => {
    it('should save text to localStorage', () => {
      saveMarkdownText(sampleText)
      expect(localStorage.setItem).toHaveBeenCalledWith(key, sampleText)
    })
  })

  describe('loadMarkdownText', () => {
    it('should load text from localStorage if present', () => {
      const loadedText = loadMarkdownText()
      expect(loadedText).toBe(sampleText)
      expect(localStorage.getItem).toHaveBeenCalledWith(key)
    })

    it('should return an empty string if no text is found', () => {
      jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => null) // Mock getItem to return null
      const loadedText = loadMarkdownText()
      expect(loadedText).toBe('')
    })
  })
})
