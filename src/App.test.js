import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Home", () => {
  it("should renders correctly", () => {
    render(<App />);
    const homeTitle = screen.getByText("Inspirational Quotes");
    expect(homeTitle).toBeInTheDocument();
  });

  it("should renders sidebar", () => {
    render(<App />);
    const sidebar = screen.queryByRole("aside");
    expect(sidebar).toBeInTheDocument();
  });

  it("should display quotes blocs", () => {
    render(<App />);
    const quotesBlock = screen.queryByRole("generic");
    expect(quotesBlock).toBeInTheDocument();
  });
});
