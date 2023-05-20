import { type Component } from 'solid-js'
import { setDocumentTitle } from '../../services/domManipulation.service'

export const PlayPages: Component = () => {
  setDocumentTitle('Playing - Dodge.Pl4y.app')
  return (
    <>
      <div>
        Play
      </div>
    </>
  )
}
