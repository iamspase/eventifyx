import NavLink from "./NavLink"
import { render } from '@testing-library/react';

describe('NavLink', () => {
  it('Renders successfully', () => {
    render(<NavLink path="/" name="Home" />)
  })
})