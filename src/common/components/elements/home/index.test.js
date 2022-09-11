import {render, screen} from "@testing-library/react"
import Home from "./Home";
import "@testing-library/jest-dom";

describe('Home', () => { 
  it("should render homepage", () => {
    render(<Home />);

  })
})