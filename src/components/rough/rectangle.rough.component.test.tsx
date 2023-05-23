import { render } from '@solidjs/testing-library'
import { describe, expect, vi } from 'vitest'
import { RectangleRoughComponents, RectangleRoughComponentsDefaultPadding } from './rectangle.rough.components'

const MOCKED_URL = 'mocked'

describe('<RoughComponents />', () => {
  beforeEach(() => {
    vi.mock('../../services/rough.services', () => ({
      roughServicesRectangle: () => MOCKED_URL
    }))
  })

  it('should render with given children', () => {
    const testMessage = 'Test message'
    const { getByText } = render(() => (
      <RectangleRoughComponents>
        <p>{testMessage}</p>
      </RectangleRoughComponents>
    ))
    expect(getByText(testMessage)).toBeInTheDocument()
  })

  it('should correctly reference div element', () => {
    const { container } = render(() => <RectangleRoughComponents><div /></RectangleRoughComponents>)
    expect(container.querySelector('div')).toBeInTheDocument()
  })

  it('should set default padding value', () => {
    const { container } = render(() => <RectangleRoughComponents><div /></RectangleRoughComponents>)
    expect(container.children[0]).toHaveStyle(`padding: ${RectangleRoughComponentsDefaultPadding}px`)
  })

  it('should set padding value from props', () => {
    const paddingValue = 30
    const { container } = render(() => <RectangleRoughComponents padding={paddingValue} ><div /></RectangleRoughComponents>)
    expect(container.children[0]).toHaveStyle(`padding: ${paddingValue}px`)
  })

  it('should set background property when mounted', () => {
    const { container } = render(() => <RectangleRoughComponents><div /></RectangleRoughComponents>)
    expect(container.children[0]).toHaveStyle('background: url(' + MOCKED_URL + ')')
  })
})
