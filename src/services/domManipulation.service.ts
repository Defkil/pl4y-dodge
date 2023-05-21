export function setDocumentTitle (title: string): void {
  document.title = title
}

export function createCanvas (width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  return canvas
}
