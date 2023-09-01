import { render, screen } from "@testing-library/react";
import { Home } from "../Home";

describe("Home", () => {
  it("should renders correctly", () => {
    render(<Home />);
    const homeTitle = screen.getByPlaceholderText("Find your inspiration");
    expect(homeTitle).toBeInTheDocument();
  });

  // it("should renders sidebar", () => {
  // render(<Home />);
  // const sidebar = screen.queryByRole("aside");
  //   // expect(sidebar).toBeInTheDocument();
  // });
});
