import './menu.ui.home.pages.scss'
import { type Component, For } from 'solid-js'
import { A } from '@solidjs/router'

export type MenuUiHomePagesProps = Array<{
  href: string
  label: string
  external?: boolean
}>

export const MenuUiHomePages: Component<{
  menuElements: MenuUiHomePagesProps
}> = (props) => {
  return (
    <>
      <For each={props.menuElements}>
        {(menuElement) => (
          (menuElement.external)
            ? (
            <a href={menuElement.href} target="_blank">
              {menuElement.label}
            </a>
              )
            : (
            <A href={menuElement.href}>
              {menuElement.label}
            </A>
              )
        )}
      </For>
    </>
  )
}
