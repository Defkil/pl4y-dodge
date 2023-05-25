import { type Component } from 'solid-js'
import { setDocumentTitle } from '../../services/domManipulation.services'
import { MenuUiHomePages, type MenuUiHomePagesProps } from './ui/menu.ui.home.pages'

import './home.pages.scss'

const menu: MenuUiHomePagesProps = [
  {
    href: '/play',
    label: 'Play'
  },
  {
    href: '/help',
    label: 'Help'
  },
  {
    href: 'https://pl4y.app',
    label: 'More on Pl4y.app',
    external: true
  }
]

export const HomePages: Component = () => {
  setDocumentTitle('Dodge - Pl4y.app')
  return (
    <>
      <div class='home-description'>
        <h1 class='home-description__title'>Dodge</h1>
        <p class='home-description__text'>Embrace the challenge with Dodge, a web game that puts your agility and reflexes to the ultimate test. Use your PC's keyboard or your smartphone's gyroscope sensor to dodge relentless waves of falling blocks. With Dodge, it's you against the odds. Can you survive and come out on top?</p>
      </div>
      <MenuUiHomePages menuElements={menu} />
      <div class='home-footer'>
        <a class='home-footer__link' href='https://1og.de/impressum/' target='_blank'>Impressum</a>
        <a class='home-footer__link' href='https://1og.de/datenschutzerklaerung/' target='_blank'>DSGVO</a>
      </div>
    </>
  )
}
