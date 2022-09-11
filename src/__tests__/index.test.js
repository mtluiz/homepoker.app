import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";

describe("Home", () => {
  it("renders the page", () => {
    render(<Home />)

    expect(screen.getByRole("heading")).toHaveTextContent("Hello Poker")
  })
})