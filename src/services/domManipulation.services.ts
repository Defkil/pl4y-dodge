/** sets the document title */
export function setDocumentTitle (title: string): void {
  document.title = title
}

/** creates a canvas element with the specified width and height */
export function createCanvas (width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  return canvas
}
