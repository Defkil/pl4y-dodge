import { beforeEach, describe, vi } from 'vitest'
import { roughServicesRectangle } from './rough.services'

describe('roughServicesRectangle function', () => {
  beforeEach(() => {
    vi.mock('roughjs', () => ({
      default: {
        canvas: () => ({
          rectangle: vi.fn()
        })
      }
    }))
    vi.mock('./domManipulation.services', () => ({
      createCanvas: (width, height) => ({
        width,
        height,
        toDataURL: vi.fn()
      })
    }))
  })

  it('should call createCanvas and rc.rectangle with correct parameters', () => {
    const settings = {
      padding: 10,
      width: 200,
      height: 100
    }
    const roughOptions = {
      roughness: 1,
      stroke: 'black',
      strokeWidth: 1
    }
    roughServicesRectangle(settings, roughOptions)
  })
})
