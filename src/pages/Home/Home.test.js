import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home", () => {
  test("renders correctly", () => {
    render(<Home />);
    const homeTitle = screen.getByText("Home");
    expect(homeTitle).toBeInTheDocument();
  });
});
