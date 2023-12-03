import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe("Navbar", () => {
  it("Renders successfully", () => {
    render(<Navbar />)
  })
})