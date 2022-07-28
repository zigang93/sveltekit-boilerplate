import { render, screen } from '@testing-library/svelte'
import ButtonSvelte from './Button.svelte'
import userEvent from '@testing-library/user-event'

const mockOnClick = vi.fn()
const defaultProps = { title: 'Hello', onClick: mockOnClick }

const setup = (props = defaultProps) => {
  const user = userEvent.setup()
  render(ButtonSvelte, props)

  const btn = screen.getByRole('button', {
    name: /hello/i,
  })
  return { btn, user }
}

describe('Button', () => {
  it('render', () => {
    const { btn } = setup()
    expect(btn).toBeInTheDocument()
  })

  it('[onClick] called once when clicked', async () => {
    const { btn, user } = setup()
    expect(btn).toBeInTheDocument()
    await user.click(btn)
    expect(mockOnClick).toBeCalledTimes(1)
  })
})
