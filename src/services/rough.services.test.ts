import { beforeEach, describe, expect, vi } from 'vitest'
import {
  roughServicesRectangle,
  roughServicesRectangleOptionsDefault,
  roughServicesRectanglePaddingMultiplier
} from './rough.services'
import * as domManipulation from './domManipulation.services'
import rough from 'roughjs'

const mocks = {
  rectangle: vi.fn()
}

const mockedDataUrl = 'data:image/png;base64,abc123'

describe('roughServicesRectangle function', () => {
  beforeEach(() => {
    vi.mock('roughjs', () => ({
      default: {
        canvas: () => ({
          rectangle: mocks.rectangle
        })
      }
    }))
    vi.mock('./domManipulation.services', () => ({
      createCanvas: (width, height) => ({
        width,
        height,
        toDataURL: vi.fn().mockReturnValue(mockedDataUrl)
      })
    }))
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should call createCanvas with width and height', () => {
    const spyCreateCanvas = vi.spyOn(domManipulation, 'createCanvas')
    const settings = {
      padding: 10,
      width: 200,
      height: 100
    }
    roughServicesRectangle(settings, {})
    expect(spyCreateCanvas).toHaveBeenCalledWith(settings.width, settings.height)
  })

  it('should call rough.canvas with a mocked canvas element', () => {
    const spyRoughCanvas = vi.spyOn(rough, 'canvas')
    const settings = {
      padding: 10,
      width: 200,
      height: 100
    }
    roughServicesRectangle(settings, {})
    expect(spyRoughCanvas).toHaveBeenCalledWith(
      expect.objectContaining({
        width: settings.width,
        height: settings.height,
        toDataURL: expect.any(Function)
      })
    )
  })

  it('should call rc.rectangle with default rough options', () => {
    const settings = {
      padding: 10,
      width: 200,
      height: 100
    }
    roughServicesRectangle(settings, {})
    expect(mocks.rectangle).toHaveBeenCalledWith(
      settings.padding,
      settings.padding,
      settings.width - settings.padding * 2 * roughServicesRectanglePaddingMultiplier,
      settings.height - settings.padding * 2 * roughServicesRectanglePaddingMultiplier,
      roughServicesRectangleOptionsDefault
    )
  })

  it('should call rc.rectangle with merged rough options', () => {
    const settings = {
      padding: 10,
      width: 200,
      height: 100
    }
    const roughOptions = {
      strokeWidth: 4,
      fill: 'red'
    }
    roughServicesRectangle(settings, roughOptions)
    expect(mocks.rectangle).toHaveBeenCalledWith(
      settings.padding,
      settings.padding,
      settings.width - settings.padding * 2 * roughServicesRectanglePaddingMultiplier,
      settings.height - settings.padding * 2 * roughServicesRectanglePaddingMultiplier,
      {
        ...roughServicesRectangleOptionsDefault,
        ...roughOptions
      }
    )
  })

  it('should call canvas.toDataURL as return', () => {
    const settings = {
      padding: 10,
      width: 200,
      height: 100
    }
    const roughOptions = {
      strokeWidth: 4,
      fill: 'red'
    }
    const result = roughServicesRectangle(settings, roughOptions)
    console.log(result)
    expect(result).toBe(mockedDataUrl)
  })
})
