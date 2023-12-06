import { render } from "@testing-library/react"
import SignInForm from "./SignInForm"

describe("Sign In Form", () => {
  it("Renders successfully", () => {
    render(<SignInForm />)
  })
})