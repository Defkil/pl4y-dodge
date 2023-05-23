import { type Component, createSignal, type JSX, onMount } from 'solid-js'
import { type Options } from 'roughjs/bin/core'
import { roughServicesRectangle } from '../../services/rough.services'

export const RectangleRoughComponentsDefaultPadding = 20

export const RectangleRoughComponents: Component<{
  children: JSX.Element
  settings?: Options
  padding?: number
}> = (props) => {
  let div: HTMLDivElement
  const [background, setBackground] = createSignal('')
  const [padding, setPadding] = createSignal(RectangleRoughComponentsDefaultPadding)

  onMount(() => {
    if (props.padding) {
      setPadding(props.padding)
    }

    const backgroundImage = roughServicesRectangle({
      width: div.clientWidth,
      height: div.clientHeight,
      padding: padding()
    }, props.settings)

    setBackground(`url(${backgroundImage})`)
  })

  return (
    <div ref={div} style={{ background: background(), padding: `${padding()}px` }}>
    {props.children}
    </div>
  )
}
