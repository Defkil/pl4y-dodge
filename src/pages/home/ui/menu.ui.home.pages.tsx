import './menu.ui.home.pages.scss'
import { type Component, createSignal, For } from 'solid-js'
import { A } from '@solidjs/router'
import { RectangleRoughComponents } from '../../../components/rough/rectangle.rough.components'
import { type Options } from 'roughjs/bin/core'

/** home menu elements */
export type MenuUiHomePagesProps = Array<{
  /** href of the link */
  href: string
  /** display name of the link */
  label: string
  /** optional property that indicates if the link is external */
  external?: boolean
}>

/** default settings for the rough rectangle */
export const menuUiHomePagesRoughDefault: Options = {
  stroke: 'green'
}

/** hover settings for the rough rectangle */
export const menuUiHomePagesRoughHover: Options = {
  strokeWidth: 2,
  stroke: 'red'
}

/**
 * home menu component
 *
 * shows the menu for the home page
 * each menu element is in a rough rectangle
 */
export const MenuUiHomePages: Component<{
  menuElements: MenuUiHomePagesProps
}> = (props) => {
  return (
    <div class='menu'>
      <For each={props.menuElements}>
        {(menuElement) => {
          // signal for the changing rough settings on hover
          const [roughSettings, setRoughSettings] = createSignal(menuUiHomePagesRoughDefault)
          return <A
            class='menu__link'
            href={menuElement.href}
            target={menuElement.external ? '_blank' : '_self'}
            onMouseEnter={() => setRoughSettings(menuUiHomePagesRoughHover)}
            onMouseLeave={() => setRoughSettings(menuUiHomePagesRoughDefault)}>
            <RectangleRoughComponents settings={roughSettings()}>
              <div class='menu__link__element'>
                {menuElement.label}
              </div>
            </RectangleRoughComponents>
          </A>
        }}
      </For>
    </div>
  )
}
