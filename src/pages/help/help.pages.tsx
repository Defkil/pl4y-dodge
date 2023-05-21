import { type Component } from 'solid-js'
import { setDocumentTitle } from '../../services/domManipulation.services'

export const HelpPages: Component = () => {
  setDocumentTitle('Help - Dodge.Pl4y.app')
  return (
    <>
      <div>
        Help
      </div>
    </>
  )
}
