import { render } from '@solidjs/testing-library'
import { describe } from 'vitest'
import HomePages from './home.pages'

describe('<HomePages />', () => {
  it('should render with a title', () => {
    render(() => (
      <HomePages />
    ))
    expect(document.title).toContain('Dodge - Pl4y.app')
  })
})
