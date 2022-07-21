import "@testing-library/jest-dom/extend-expect"
import { cleanup, render } from "@testing-library/react"
import Home from "./index"

const renderContainer = () => {
  return render(<Home />)
}

afterEach(cleanup)

test("Renders Home Component", async () => {
  const component = renderContainer()
  expect(component).toMatchSnapshot()
})
