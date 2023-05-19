import { setDocumentTitle } from './domManipulation';

test('setDocumentTitle sets the document title', () => {
  const title = 'Test Title'
  setDocumentTitle(title)
  expect(document.title).toBe(title)
})
