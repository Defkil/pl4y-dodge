import { type Options } from 'roughjs/bin/core'
import rough from 'roughjs'
import { createCanvas } from './domManipulation.services'

/** Settings for the Rough rectangle */
export interface RoughServicesRectangleSettings {
  /** Number of pixels for the padding around the rectangle */
  padding: number
  /** Width of the rectangle in pixels */
  width: number
  /** Height of the rectangle in pixels */
  height: number
}

/** Multiplier used to compensate for the bowing effect in the rectangle */
export const roughServicesRectanglePaddingMultiplier = 1.2

/** Default options for the Rough rectangle */
export const roughServicesRectangleOptionsDefault: Options = {
  strokeWidth: 2,
  bowing: 3
}

/**
 * Generates a data URL for an image of a rectangle with rough edges, using the provided settings and options.
 * The rectangle is drawn on a canvas element.
 */
export function roughServicesRectangle (settings: RoughServicesRectangleSettings, roughOptions: Options): string {
  const canvas = createCanvas(settings.width, settings.height)
  const rc = rough.canvas(canvas)
  const x = settings.padding
  const y = settings.padding

  // Calculate the width and height of the rectangle, reducing the actual canvas size by padding to maintain consistent border
  // The roughServicesRectanglePaddingMultiplier is used to ensure the rectangle fits within the canvas even with the bowing effect
  const width = canvas.width - settings.padding * 2 * roughServicesRectanglePaddingMultiplier
  const height = canvas.height - settings.padding * 2 * roughServicesRectanglePaddingMultiplier

  rc.rectangle(x, y, width, height, { ...roughServicesRectangleOptionsDefault, ...roughOptions })
  return canvas.toDataURL()
}
