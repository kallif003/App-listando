import Home from "./Home"
import { render, fireEvent } from "@testing-library/react-native"

describe("Header", () => {
	it("Renders a logo", () => {
		const { getByTestId } = render(<Home />)
		const text = "oi"
		const input = getByTestId("text")
		fireEvent.changeText(input, text)
	})
})
