import { render } from '@solidjs/testing-library'
import { describe, vi } from 'vitest'
import { HomePages } from './home.pages'
import { Router } from '@solidjs/router'

describe('<HomePages />', () => {
  beforeEach(() => {
    vi.mock('../../services/rough.services')
  })
  it('should render with a title', () => {
    render(() => (
      <HomePages />
    ), { wrapper: (props) => <Router>{props.children}</Router> })
    expect(document.title).toContain('Dodge - Pl4y.app')
  })
})
