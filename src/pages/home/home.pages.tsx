import { type Component } from 'solid-js'
import { setDocumentTitle } from '../../services/domManipulation.service'

export const HomePages: Component = () => {
  setDocumentTitle('Dodge - Pl4y.app')
  return (
    <>
      <div>
        Home
      </div>
    </>
  )
}
