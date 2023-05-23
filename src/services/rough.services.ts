import { type Options } from 'roughjs/bin/core'
import rough from 'roughjs'
import { createCanvas } from './domManipulation.services'

export interface RoughServicesRectangleSettings {
  padding: number
  width: number
  height: number
}

export function roughServicesRectangle (settings: RoughServicesRectangleSettings, roughOptions: Options): string {
  const canvas = createCanvas(settings.width, settings.height)
  const rc = rough.canvas(canvas)
  rc.rectangle(settings.padding / 2, settings.padding / 2, canvas.width - settings.padding * 1.5, canvas.height - settings.padding * 1.5, roughOptions)
  return canvas.toDataURL()
}
