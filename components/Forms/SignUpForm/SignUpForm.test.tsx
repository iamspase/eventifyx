import { render } from "@testing-library/react"
import SignUpForm from "./SignUpForm"

describe("Sign Up Form", () => {
  it("Renders successfully", () => {
    render(<SignUpForm />)
  })
})