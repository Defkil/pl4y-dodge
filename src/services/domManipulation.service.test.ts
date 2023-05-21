import { createCanvas, setDocumentTitle } from './domManipulation.service'

test('setDocumentTitle sets the document title', () => {
  const title = 'Test Title'
  setDocumentTitle(title)
  expect(document.title).toBe(title)
})

describe('createCanvas', () => {
  it('should create a canvas element', () => {
    const canvas = createCanvas(200, 100)
    expect(canvas).toBeInstanceOf(HTMLCanvasElement)
  })

  it('should set the canvas width and height based on the input parameters', () => {
    const width = 200
    const height = 100
    const canvas = createCanvas(width, height)
    expect(canvas.width).toBe(width)
    expect(canvas.height).toBe(height)
  })

  it('should create distinct canvas elements on multiple calls', () => {
    const canvas1 = createCanvas(200, 100)
    const canvas2 = createCanvas(200, 100)
    expect(canvas1).not.toBe(canvas2)
  })
})
